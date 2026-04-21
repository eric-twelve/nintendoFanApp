import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementService } from '../../../service/element.service';

@Component({
  selector: 'app-cataleg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cataleg.page.html',
  styleUrls: ['./cataleg.page.scss']
})
export class CatalegPage implements OnInit {

  private elementService = inject(ElementService);

  elements = this.elementService.elements;
  carregant = this.elementService.carregant;
  error = this.elementService.error;

  ngOnInit(): void {
    this.elementService.obtenirPopulars();
  }

  reintentar(): void {
    this.elementService.obtenirPopulars();
  }
}