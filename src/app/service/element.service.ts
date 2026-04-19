import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { map } from 'rxjs';
import { ElementApiResponse, ElementCataleg } from '../models/element.cataleg.model';
import { adaptarElementsApi } from '../adaptadors/element.adaptador';

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  private apiUrl = 'http://localhost:3000/elements';

  private _elements = signal<ElementCataleg[]>([]);
  private _carregant = signal<boolean>(false);
  private _error = signal<string | null>(null);

  elements = this._elements.asReadonly();
  carregant = this._carregant.asReadonly();
  error = this._error.asReadonly();

  constructor(private http: HttpClient) {}

  obtenirPopulars(): void {
    this._carregant.set(true);
    this._error.set(null);

    this.http
      .get<ElementApiResponse[]>(`${this.apiUrl}?popular=true`)
      .pipe(map(adaptarElementsApi))
      .subscribe({
        next: (res) => {
          this._elements.set(res);
          this._carregant.set(false);
        },
        error: () => {
          this._error.set('No s’han pogut carregar els elements populars.');
          this._carregant.set(false);
        }
      });
  }

  cercar(terme: string): void {
    this._carregant.set(true);
    this._error.set(null);

    this.http
      .get<ElementApiResponse[]>(`${this.apiUrl}?nom_like=${terme}`)
      .pipe(map(adaptarElementsApi))
      .subscribe({
        next: (res) => {
          this._elements.set(res);
          this._carregant.set(false);
        },
        error: () => {
          this._error.set('Error en cercar elements. Torna-ho a intentar.');
          this._carregant.set(false);
        }
      });
  }
}