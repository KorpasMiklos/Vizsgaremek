import { Component, Output, EventEmitter } from '@angular/core';
import { ParkoloService } from '../parkolo.service';
import { Jarmu } from '../models/jarmu.model';
import { Parkolotulaj } from '../models/parkolotulaj.model';

@Component({
  selector: 'app-uj-adat',
  standalone: false,
  templateUrl: './uj-adat.component.html',
  styleUrl: './uj-adat.component.css'
})
export class UjAdatComponent {
  @Output() close = new EventEmitter<void>();

  tipus : 'jarmu' | 'tulaj' | null = null;

  jarmu : Jarmu = {
    rendszam : '',
    szin : '',
    tipus : '',
    tulajdonos : ''
  };

  tulaj : Parkolotulaj = {
    nev : '',
    telefonszam : '',
    email_cim : ''
  };

  constructor(private parkoloService : ParkoloService){}

  mentes() : void{
    if(this.tipus === 'jarmu'){
      this.parkoloService.addJarmu(this.jarmu).subscribe({
        next : () => this.close.emit(),
        error : () => alert('Nem sikerült a jármű mentése!')
      });
    }

    if(this.tipus === 'tulaj'){
      this.parkoloService.addParkolotulaj(this.tulaj).subscribe({
        next : () => this.close.emit(),
        error : () => alert('Nem sikerült a tulajdonos mentése!')
      });
    }
  }

  bezaras() : void{
    this.close.emit();
  }


}
