import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-barra-cerca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './barra-cerca.component.html',
  styleUrls: ['./barra-cerca.component.scss']
})
export class BarraCercaComponent {

  buscarText: string = '';

  @Output() buscar = new EventEmitter<string>();

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.buscar.emit(this.buscarText);
    }
  }
}