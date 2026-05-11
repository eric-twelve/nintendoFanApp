import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class VideojocService {

  videojocs = [

  { id: 1, nom: 'Super Mario Odyssey', genere: 'Plataformes' },
  { id: 2, nom: 'The Legend of Zelda: Breath of the Wild', genere: 'Aventura' },
  { id: 3, nom: 'Animal Crossing: New Horizons', genere: 'Simulació' },
  { id: 4, nom: 'Splatoon 3', genere: 'Shooter' },
  { id: 5, nom: 'Super Smash Bros. Ultimate', genere: 'Lluita' },
  { id: 6, nom: 'Pokémon Violet', genere: 'RPG' },
  { id: 7, nom: 'Luigi’s Mansion 3', genere: 'Aventura' },
  { id: 8, nom: 'Kirby and the Forgotten Land', genere: 'Plataformes' },
  { id: 9, nom: 'Metroid Prime Remastered', genere: 'Acció' },
  { id: 10, nom: 'Donkey Kong Country: Tropical Freeze', genere: 'Plataformes' },

  { id: 11, nom: 'Mario Party Superstars', genere: 'Party' },
  { id: 12, nom: 'Fire Emblem Engage', genere: 'Estratègia' },
  { id: 13, nom: 'Paper Mario: The Origami King', genere: 'RPG' },
  { id: 14, nom: 'Yoshi’s Crafted World', genere: 'Plataformes' },
  { id: 15, nom: 'Bayonetta 3', genere: 'Acció' },
  { id: 16, nom: 'Xenoblade Chronicles 3', genere: 'RPG' },
  { id: 17, nom: 'Mario Kart 8 Deluxe', genere: 'Carreres' },
  { id: 18, nom: 'ARMS', genere: 'Lluita' },
  { id: 19, nom: 'Captain Toad: Treasure Tracker', genere: 'Puzles' },
  { id: 20, nom: 'Pikmin 4', genere: 'Estratègia' },

  { id: 21, nom: 'Pokémon Legends Arceus', genere: 'RPG' },
  { id: 22, nom: 'New Super Mario Bros. U Deluxe', genere: 'Plataformes' },
  { id: 23, nom: 'Astral Chain', genere: 'Acció' },
  { id: 24, nom: 'F-Zero 99', genere: 'Carreres' },
  { id: 25, nom: 'Advance Wars 1+2 Re-Boot Camp', genere: 'Estratègia' },
  { id: 26, nom: 'WarioWare: Move It!', genere: 'Party' },
  { id: 27, nom: 'Nintendo Switch Sports', genere: 'Esports' },
  { id: 28, nom: 'Mario Tennis Aces', genere: 'Esports' },
  { id: 29, nom: 'Mario Golf: Super Rush', genere: 'Esports' },
  { id: 30, nom: 'Hyrule Warriors: Age of Calamity', genere: 'Acció' },

  { id: 31, nom: 'Kirby Star Allies', genere: 'Plataformes' },
  { id: 32, nom: 'Pokémon Sword', genere: 'RPG' },
  { id: 33, nom: 'Pokémon Shield', genere: 'RPG' },
  { id: 34, nom: 'Super Mario Maker 2', genere: 'Creativitat' },
  { id: 35, nom: 'The Legend of Zelda: Skyward Sword HD', genere: 'Aventura' },
  { id: 36, nom: 'Miitopia', genere: 'RPG' },
  { id: 37, nom: 'Big Brain Academy: Brain vs Brain', genere: 'Educatiu' },
  { id: 38, nom: 'Clubhouse Games: 51 Worldwide Classics', genere: 'Taula' },
  { id: 39, nom: 'Mario Strikers: Battle League', genere: 'Esports' },
  { id: 40, nom: 'Triangle Strategy', genere: 'Estratègia' },

  { id: 41, nom: 'Bravely Default II', genere: 'RPG' },
  { id: 42, nom: 'Pokémon Snap', genere: 'Simulació' },
  { id: 43, nom: 'Ring Fit Adventure', genere: 'Fitness' },
  { id: 44, nom: '1-2-Switch', genere: 'Party' },
  { id: 45, nom: 'Snipperclips', genere: 'Puzles' },
  { id: 46, nom: 'Mario + Rabbids Kingdom Battle', genere: 'Estratègia' },
  { id: 47, nom: 'Mario + Rabbids Sparks of Hope', genere: 'Estratègia' },
  { id: 48, nom: 'The World Ends With You', genere: 'RPG' },
  { id: 49, nom: 'Daemon X Machina', genere: 'Acció' },
  { id: 50, nom: 'Tokyo Mirage Sessions #FE Encore', genere: 'RPG' },

  { id: 51, nom: 'Xenoblade Chronicles Definitive Edition', genere: 'RPG' },
  { id: 52, nom: 'Super Mario 3D World + Bowser’s Fury', genere: 'Plataformes' },
  { id: 53, nom: 'Mario vs Donkey Kong', genere: 'Puzles' },
  { id: 54, nom: 'Kirby Return to Dream Land Deluxe', genere: 'Plataformes' },
  { id: 55, nom: 'Detective Pikachu Returns', genere: 'Aventura' },
  { id: 56, nom: 'Princess Peach Showtime!', genere: 'Aventura' },
  { id: 57, nom: 'Endless Ocean Luminous', genere: 'Exploració' },
  { id: 58, nom: 'Mario & Sonic at the Olympic Games', genere: 'Esports' },
  { id: 59, nom: 'WarioWare: Get It Together!', genere: 'Party' },
  { id: 60, nom: 'Dr. Mario World', genere: 'Puzles' },

  { id: 61, nom: 'Yoshi’s Woolly World', genere: 'Plataformes' },
  { id: 62, nom: 'Mario Superstar Baseball', genere: 'Esports' },
  { id: 63, nom: 'Famicom Detective Club', genere: 'Aventura' },
  { id: 64, nom: 'Another Code: Recollection', genere: 'Aventura' },
  { id: 65, nom: 'Wave Race 64', genere: 'Carreres' },
  { id: 66, nom: '1080° Snowboarding', genere: 'Esports' },
  { id: 67, nom: 'Golden Sun', genere: 'RPG' },
  { id: 68, nom: 'EarthBound', genere: 'RPG' },
  { id: 69, nom: 'Star Fox Zero', genere: 'Shooter' },
  { id: 70, nom: 'Star Fox 64', genere: 'Shooter' },

  { id: 71, nom: 'Pilotwings Resort', genere: 'Simulació' },
  { id: 72, nom: 'Kid Icarus: Uprising', genere: 'Acció' },
  { id: 73, nom: 'Punch-Out!!', genere: 'Lluita' },
  { id: 74, nom: 'Excitebike', genere: 'Carreres' },
  { id: 75, nom: 'Rhythm Heaven Fever', genere: 'Musical' },
  { id: 76, nom: 'Elite Beat Agents', genere: 'Musical' },
  { id: 77, nom: 'Sin and Punishment', genere: 'Shooter' },
  { id: 78, nom: 'Advance Wars: Dual Strike', genere: 'Estratègia' },
  { id: 79, nom: 'Battalion Wars', genere: 'Estratègia' },
  { id: 80, nom: 'Mario Hoops 3-on-3', genere: 'Esports' },

  { id: 81, nom: 'Chibi-Robo!', genere: 'Aventura' },
  { id: 82, nom: 'Custom Robo', genere: 'Acció' },
  { id: 83, nom: 'Ever Oasis', genere: 'RPG' },
  { id: 84, nom: 'Fantasy Life', genere: 'Simulació' },
  { id: 85, nom: 'Style Savvy', genere: 'Simulació' },
  { id: 86, nom: 'Tomodachi Life', genere: 'Simulació' },
  { id: 87, nom: 'Nintendogs + Cats', genere: 'Simulació' },
  { id: 88, nom: 'Mario Paint', genere: 'Creativitat' },
  { id: 89, nom: 'Art Academy', genere: 'Educatiu' },
  { id: 90, nom: 'Brain Age', genere: 'Educatiu' },

  { id: 91, nom: 'Jam with the Band', genere: 'Musical' },
  { id: 92, nom: 'Fossil Fighters', genere: 'RPG' },
  { id: 93, nom: 'Hotel Dusk: Room 215', genere: 'Aventura' },
  { id: 94, nom: 'Trace Memory', genere: 'Aventura' },
  { id: 95, nom: 'Wii Sports Resort', genere: 'Esports' },
  { id: 96, nom: 'Wii Play', genere: 'Party' },
  { id: 97, nom: 'Mario Sports Mix', genere: 'Esports' },
  { id: 98, nom: 'Pokkén Tournament DX', genere: 'Lluita' },
  { id: 99, nom: 'Pokémon Unite', genere: 'MOBA' },
  { id: 100, nom: 'Tetris 99', genere: 'Puzles' }

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