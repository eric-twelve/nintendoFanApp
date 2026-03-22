import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DADES_MOCK } from './mocks/dades-mock';
import { AppElement } from './models/element.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NintendoFanApp';
<<<<<<< Updated upstream
=======

  elements: AppElement[] = DADES_MOCK;
  
  constructor() {
    console.log('NintedoFanApp has been started, it will be fun \n - EricALvarezLinares - ');
    console.log(DADES_MOCK);
  }
>>>>>>> Stashed changes
}
