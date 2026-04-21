import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementService } from '../../../service/element.service';
import { FormulariCercaComponent } from '../../formulari-cerca/formulari-cerca/formulari-cerca.component';

@Component({
  selector: 'app-cataleg',
  standalone: true,
  imports: [CommonModule, FormulariCercaComponent],
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
  onCerca(terme: string): void {
  if (!terme || terme.length < 2) {
    this.elementService.obtenirPopulars();
    return;
  }

  this.elementService.cercar(terme);
}

  reintentar(): void {
    this.elementService.obtenirPopulars();
  }
}