import { Component,Input } from '@angular/core';
import { TargetaElementComponent } from '../targeta-element/targeta-element.component';
import { CommonModule } from '@angular/common';
import { AppElement } from '../../models/element.model';

@Component({
  selector: 'app-llista-elements',
  standalone: true,
  imports: [
    CommonModule,
    TargetaElementComponent],
  templateUrl: './llista-elements.component.html',
  styleUrls: ['./llista-elements.component.scss']
})
export class LlistaElementsComponent {
  @Input() elements: AppElement[] = [];
}
