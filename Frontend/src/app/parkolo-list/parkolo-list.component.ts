import { Component, OnInit } from '@angular/core';
import { ParkoloService } from '../parkolo.service';

@Component({
  selector: 'app-parkolo-list',
  standalone: false,
  templateUrl: './parkolo-list.component.html',
  styleUrl: './parkolo-list.component.css'
})
export class ParkoloListComponent implements OnInit{

parkolok : any[] = [];
kivalasztott : any = null;
betoltes = false;
hiba = '';

constructor(private parkoloService : ParkoloService){}

ngOnInit(): void {
  this.parkolokBetoltese();

  this.parkoloService.frissites$.subscribe(() => {
    this.parkolokBetoltese();
  });
}

parkolokBetoltese() : void{
  this.betoltes = true;
  this.hiba = '';

  this.parkoloService.getParkolok().subscribe({
    next : (data) => {
      this.parkolok = data;
      this.betoltes = false;
    },
    error : () => {
      this.hiba = 'Nem sikerült betölteni a parkolókat';
      this.betoltes = false;
    }
  });
}

foglalas(parkolo : any) : void{
  this.kivalasztott = parkolo;
}

Bezaras() : void {
  this.kivalasztott = null;
}

}
