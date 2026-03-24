import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DADES_MOCK } from './mocks/dades-mock';
import { AppElement } from './models/element.model';
import { BarraCercaComponent } from './components/barra-cerca/barra-cerca.component';
import { LlistaElementsComponent } from './components/llista-elements/llista-elements.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    BarraCercaComponent,
    LlistaElementsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NintendoFanApp';
  elements: AppElement[] = DADES_MOCK;
  elementsFiltrats: AppElement[] = DADES_MOCK; // IMPORTANT!

  // Captura l'event del fill i filtra
  onBuscar(text: string) {
    this.elementsFiltrats = this.elements.filter(el =>
      el.nom.toLowerCase().includes(text.toLowerCase())
    );
  }

  constructor() {
    console.log('NintendoFanApp started');
  }
}