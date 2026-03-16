import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  showAdatvedelmi = false;

  openAdatvedelmi(event : Event){
    event.preventDefault();
    this.showAdatvedelmi = true;
  }

  closeAdatvedelmi(){
    this.showAdatvedelmi = false;
  }

}
