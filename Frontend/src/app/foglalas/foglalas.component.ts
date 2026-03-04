import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';
import { Parkolas } from '../models/parkolas.model';
import { Berles } from '../models/berles.model';
import { ParkoloService } from '../parkolo.service';
import { Jarmu } from '../models/jarmu.model';
import { Parkolotulaj } from '../models/parkolotulaj.model';

@Component({
  selector: 'app-foglalas',
  standalone: false,
  templateUrl: './foglalas.component.html',
  styleUrl: './foglalas.component.css'
})
export class FoglalasComponent implements OnInit{

@Input() parkolo!: any;
@Output() close = new EventEmitter<boolean>();

jarmuvek : Jarmu[] = [];
tulajok : Parkolotulaj[] = [];

tipus : 'parkolas' | 'berles' | null = null;

parkolas : Parkolas | null = null;
berles : Berles | null = null;

constructor(private parkoloService : ParkoloService){}

ngOnInit(): void {
  this.parkoloService.getJarmuvek().subscribe(data => {
    this.jarmuvek = data;
  });
  this.parkoloService.getParkolotulajok().subscribe(data => {
    this.tulajok = data;
  });
}

tipusValasztas(tipus : 'parkolas' | 'berles'){
  this.tipus = tipus;

  if(tipus === 'parkolas'){
    this.parkolas = {
      jarmu_id : null,
      parkolo_id : this.parkolo.id,
      parkolas_kezdete : null,
      parkolas_vege : null,
      parkolas_idotartama : null 
    };
  }

  if(tipus === 'berles'){
    this.berles = {
      parkolo_id : this.parkolo.id,
      tulaj_id : null,
      berles_kezdete : null,
      berles_vege : null,
      ar : null
    };
  }
}

szamolBerlesAr(): void {
  if (!this.berles?.berles_kezdete || !this.berles?.berles_vege) {
    this.berles!.ar = null;
    return;
  }

  const kezdet = new Date(this.berles.berles_kezdete);
  const vege = new Date(this.berles.berles_vege);

  if (vege < kezdet) {
    this.berles!.ar = null;
    return;
  }

  // 1 nap milliszekundumban:
  // 1000 ms = 1 mp
  // 60 mp = 1 perc
  // 60 perc = 1 óra
  // 24 óra = 1 nap
  const msPerNap = 1000 * 60 * 60 * 24;

  // A két dátum közti különbség milliszekundumban
  // getTime() → 1970.01.01 óta eltelt ms
  const kulonbsegMs = vege.getTime() - kezdet.getTime();

  // Napok száma (felfelé kerekítve, mert megkezdett nap is fizetendő)
  const napokSzama = Math.max(1, Math.ceil(kulonbsegMs / msPerNap));

  // Végső ár: napok × 500 Ft
  this.berles!.ar = napokSzama * 500;
}

mentes() : void{
  if(this.tipus === 'parkolas' && this.parkolas){
    this.parkoloService.addParkolas(this.parkolas).subscribe({
    next : (res) => {
      console.log('Parkolás sikeresen mentve',res);
      this.parkolo.allapot = 1;
      this.parkoloService.valtozottAdat();
      this.close.emit(true); //MODAL BEZÁRÁSA
    },
    error: (err) => {
      console.error('Parkolás mentési hiba', err);
      alert('Nem sikerült a parkolás mentése!');
    }
  });

}

if(this.tipus === 'berles' && this.berles){
  this.parkoloService.addBerles(this.berles).subscribe({
    next : (res) => {
      console.log('Bérlés sikeresen mentve?:', res);
      this.parkolo.allapot = 1;
      this.parkoloService.valtozottAdat();
      this.close.emit(true);
    },
    error : (err) => {
      console.error('Bérlés mentési hiba:', err);
      alert('Nem sikerült a bérlés mentése!');
    }
  });
}

}

szamolParkolasIdotartam(): void {
  if (!this.parkolas?.parkolas_kezdete || !this.parkolas?.parkolas_vege) {
    this.parkolas!.parkolas_idotartama = null;
    return;
  }

  const kezdet = new Date(this.parkolas.parkolas_kezdete);
  const vege = new Date(this.parkolas.parkolas_vege);

  if (vege <= kezdet) {
    this.parkolas!.parkolas_idotartama = null;
    return;
  }

  const kulonbsegMs = vege.getTime() - kezdet.getTime();

  // milliszekundum → perc
  const perc = Math.floor(kulonbsegMs / (1000 * 60));

  this.parkolas!.parkolas_idotartama = perc;
}

bezaras(): void {
  this.tipus = null;
  this.parkolas = null;
  this.berles = null;
  this.close.emit();
}


}
