import { Component, OnInit } from '@angular/core';
import { ParkoloService } from '../parkolo.service';
import { Subject, takeUntil } from 'rxjs';

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

private destroy$ = new Subject<void>();

constructor(private parkoloService : ParkoloService){}

ngOnInit(): void {
  this.parkolokBetoltese();

  this.parkoloService.frissites$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.parkoloService.saveScroll();
        this.parkolokBetoltese();
      });
}

ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

parkolokBetoltese() : void{
  this.betoltes = true;
  this.hiba = '';

  this.parkoloService.getParkolok().subscribe({
    next : (data) => {
      this.parkolok = data;
      this.betoltes = false;

      setTimeout(() => {
        this.parkoloService.restoreScroll();
      }, 0);

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

trackById(index: number, item: any): any {
  return item.id;
}

}
