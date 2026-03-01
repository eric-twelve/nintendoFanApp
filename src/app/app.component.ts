import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NintendoFanApp';

  constructor() {
    console.log('NintedoFanApp has been started, it will be fun \n - EricALvarezLinares - ');
  }
}
