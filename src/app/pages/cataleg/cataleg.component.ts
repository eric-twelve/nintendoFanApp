import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';

import { VideojocService } from '../../services/videojoc.service';

@Component({
  selector: 'app-cataleg',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cataleg.component.html',
  styleUrl: './cataleg.component.scss'
})

export class CatalegComponent {

  videojocs;

  constructor(
    private videojocService: VideojocService
  ) {

    this.videojocs =
      this.videojocService.obtenirVideojocs();

  }

}