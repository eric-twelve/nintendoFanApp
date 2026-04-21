import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { debounceTime, switchMap, of, map, delay, tap } from 'rxjs';
import { AbstractControl } from '@angular/forms';
import { ElementApiResponse } from '../../../models/element.cataleg.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulari-cerca',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulari-cerca.component.html'
})
export class FormulariCercaComponent {

  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/elements';

  validant = signal(false);

  termeCerca = new FormControl('', [
    Validators.minLength(2),
    Validators.maxLength(50)
  ], [
    this.codiDisponibleValidator.bind(this)
  ]);

  resultats = signal<any[]>([]);

  constructor() {
    this.termeCerca.valueChanges.pipe(
      debounceTime(400),

      tap(() => {
        this.validant.set(true);
      }),

      switchMap(value => {
        if (!value || value.length < 2) {
          this.validant.set(false);
          this.resultats.set([]);
          return of([]);
        }

        return this.http.get<ElementApiResponse[]>(
          `${this.apiUrl}?nom_like=${value}`
        ).pipe(
          delay(500)
        );
      })

    ).subscribe(res => {
      this.resultats.set(res);
      this.validant.set(false);
    });
  }
  codiDisponibleValidator(control: AbstractControl) {
    return this.http.get<ElementApiResponse[]>(
      `${this.apiUrl}?nom_like=${control.value}`
    ).pipe(
      delay(500),
      map(res => {
        return res.length === 0 ? { sensResultats: true } : null;
      })
    );
  }
  netejar() {
    this.termeCerca.setValue('');
    this.resultats.set([]);
  }
}