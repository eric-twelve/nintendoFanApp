import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cerca',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cerca.component.html',
  styleUrl: './cerca.component.scss'
})
export class CercaComponent {

  textCerca = '';

  videojocs = [
    'Zelda',
    'Minecraft',
    'FIFA 25',
    'Mario Kart'
  ];

}