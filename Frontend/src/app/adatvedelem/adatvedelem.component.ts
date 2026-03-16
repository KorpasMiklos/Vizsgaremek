import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-adatvedelem',
  standalone: false,
  templateUrl: './adatvedelem.component.html',
  styleUrl: './adatvedelem.component.css'
})
export class AdatvedelemComponent {

  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }

}
