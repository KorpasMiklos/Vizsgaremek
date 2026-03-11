import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkoloService {

  private apiUrl1 = 'http://localhost:3000/api/parkolo'; //parkolók
  private apiUrl2 = 'http://localhost:3000/api/jarmu'; //járművek
  private apiUrl3 = 'http://localhost:3000/api/parkolas'; //parkolások
  private apiUrl4 = 'http://localhost:3000/api/parkolotulaj'; //parkolótulajdonosok
  private apiUrl5 = 'http://localhost:3000/api/berles'; //bérlések
  private apiUrl6 = 'http://localhost:3000/api/szabadparkolo'; //szabad parkolók
  private apiUrl7 = 'http://localhost:3000/api/foglaltparkolo'; //foglalt parkolók
  private apiUrl8 = 'http://localhost:3000/api/bereltparkolo'; //bérelt parkolók

  private frissitesSubject = new Subject<void>();
  frissites$ = this.frissitesSubject.asObservable();


  constructor(private http : HttpClient) {interval(10000).subscribe(() => {
    this.valtozottAdat();
  }) }

  valtozottAdat() : void{
    this.frissitesSubject.next();
  }

  //GET Összes parkoló
  getParkolok() : Observable<any>{
    return this.http.get<any>(this.apiUrl1);
  }

  //GET Összes jármű
  getJarmuvek() : Observable<any>{
    return this.http.get<any>(this.apiUrl2);
  }

  //GET összes parkolás
  getParkolasok() : Observable<any>{
    return this.http.get<any>(this.apiUrl3);
  }

  //GET összes tulajdonos
  getParkolotulajok() : Observable<any>{
    return this.http.get<any>(this.apiUrl4);
  }

  //GET összes bérlés
  getBerlesek() : Observable<any>{
    return this.http.get<any>(this.apiUrl5);
  }

  //GET szabad parkolók
  getSzabadParkolok() : Observable<any>{
    return this.http.get<any>(this.apiUrl6);
  }

  //GET foglalt parkolók
  getFoglaltParkolok() : Observable<any>{
    return this.http.get<any>(this.apiUrl7);
  }

  //GET bérelt parkolók
  getBereltParkolok() : Observable<any>{
    return this.http.get<any>(this.apiUrl8);
  }

  //POST új jármű
  addJarmu(jarmu : any) : Observable<any>{
    return this.http.post<any>(this.apiUrl2,jarmu);
  }

  //POST parkoló tulajdonos
  addParkolotulaj(tulaj : any) : Observable<any>{
    return this.http.post<any>(this.apiUrl4,tulaj);
  }

  //POST bérlés
  addBerles(berles : any) : Observable<any>{
    return this.http.post<any>(this.apiUrl5,berles);
  }

  //POST parkolás
  addParkolas(parkolas : any) : Observable<any>{
    return this.http.post<any>(this.apiUrl3, parkolas);
  }

  saveScroll(){
    sessionStorage.setItem('scroll', window.scrollY.toString());
  }

  restoreScroll(){
    const scroll = sessionStorage.getItem('scroll');
    if(scroll){
      requestAnimationFrame(() => {
      window.scrollTo(0, +scroll);
      });
    }
  }

}
