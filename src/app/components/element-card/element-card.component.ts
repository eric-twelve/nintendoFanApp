import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-element-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="card">
      <h3>{{ element.nom }}</h3>
      <p>{{ element.genere }}</p>
    </div>
  `
})
export class ElementCardComponent {
  @Input() element!: any;
}