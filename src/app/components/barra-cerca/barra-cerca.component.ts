import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-barra-cerca',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './barra-cerca.component.html',
  styleUrls: ['./barra-cerca.component.scss']
})
export class BarraCercaComponent {
  @Output() buscar = new EventEmitter<string>();

  onInput(event: any) {
    this.buscar.emit(event.target.value);
  }
}