import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class VideojocService {

  videojocs = [
  {
    id: 1,
    nom: 'Super Mario Odyssey',
    genere: 'Plataformes'
  },

  {
    id: 2,
    nom: 'The Legend of Zelda: Breath of the Wild',
    genere: 'Aventura'
  },

  {
    id: 3,
    nom: 'Animal Crossing: New Horizons',
    genere: 'Simulació'
  },

  {
    id: 4,
    nom: 'Splatoon 3',
    genere: 'Shooter'
  },

  {
    id: 5,
    nom: 'Super Smash Bros. Ultimate',
    genere: 'Lluita'
  },

  {
    id: 6,
    nom: 'Pokémon Violet',
    genere: 'RPG'
  },

  {
    id: 7,
    nom: 'Luigi’s Mansion 3',
    genere: 'Aventura'
  },

  {
    id: 8,
    nom: 'Kirby and the Forgotten Land',
    genere: 'Plataformes'
  },

  {
    id: 9,
    nom: 'Metroid Prime Remastered',
    genere: 'Acció'
  },

  {
    id: 10,
    nom: 'Donkey Kong Country: Tropical Freeze',
    genere: 'Plataformes'
  },

  {
    id: 11,
    nom: 'Mario Party Superstars',
    genere: 'Party'
  },

  {
    id: 12,
    nom: 'Fire Emblem Engage',
    genere: 'Estratègia'
  }
];

  obtenirVideojocs() {

    return this.videojocs;

  }

  obtenirVideojocPerId(id: number) {

    return this.videojocs.find(
      v => v.id === id
    );

  }

}