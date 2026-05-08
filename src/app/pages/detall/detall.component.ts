import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detall',
  standalone: true,
  imports: [],
  templateUrl: './detall.component.html',
  styleUrl: './detall.component.scss'
})
export class DetallComponent implements OnInit {

  id: string | null = null;

  videojocs = [
    { id: 1, nom: 'Zelda', genere: 'Aventura' },
    { id: 2, nom: 'FIFA 25', genere: 'Esports' },
    { id: 3, nom: 'Minecraft', genere: 'Sandbox' }
  ];

  videojoc: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    this.videojoc = this.videojocs.find(
      v => v.id === Number(this.id)
    );

  }

}