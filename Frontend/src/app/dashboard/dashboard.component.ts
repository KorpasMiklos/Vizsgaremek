import { Component, OnInit } from '@angular/core';
import { ParkoloService } from '../parkolo.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  osszes = 0;
  szabad = 0;
  foglalt = 0;
  berelt = 0;

  constructor(private parkoloservice : ParkoloService){}

  ngOnInit(): void {
    this.betoltes();
    this.parkoloservice.frissites$.subscribe(() => {
      this.betoltes();
    });
  }

  betoltes (): void{
    this.parkoloservice.getParkolok().subscribe(data => {
      this.osszes = data.length;
    });
    this.parkoloservice.getSzabadParkolok().subscribe(data => {
      this.szabad = data.length;
    });
    this.parkoloservice.getFoglaltParkolok().subscribe(data => {
      this.foglalt = data.length;
    });
    this.parkoloservice.getBereltParkolok().subscribe(data => {
      this.berelt = data.length;
    });
  }

}
