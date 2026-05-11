import { Component, OnInit } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { VideojocService } from '../../services/videojoc.service';
import { ElementCardComponent } from '../../components/element-card/element-card.component';

@Component({
  selector: 'app-cataleg',
  standalone: true,
  imports: [
    ScrollingModule,
    ElementCardComponent
  ],
  templateUrl: './cataleg.component.html',
  styleUrl: './cataleg.component.scss'
})
export class CatalegComponent implements OnInit {

  videojocs: any[] = [];

  constructor(
    private videojocService: VideojocService
  ) {}

  ngOnInit(): void {
    this.videojocs = this.videojocService.obtenirVideojocs();
  }
}