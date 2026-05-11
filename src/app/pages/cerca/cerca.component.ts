import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VideojocService } from '../../services/videojoc.service';

@Component({
  selector: 'app-cerca',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cerca.component.html',
  styleUrl: './cerca.component.scss'
})

export class CercaComponent {
  textCerca = '';
  videojocs;

  constructor(
    private videojocService: VideojocService
  ) {
    this.videojocs =
      this.videojocService.obtenirVideojocs();
  }
}