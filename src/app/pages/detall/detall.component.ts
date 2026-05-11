import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideojocService } from '../../services/videojoc.service';

@Component({
  selector: 'app-detall',
  standalone: true,
  imports: [],
  templateUrl: './detall.component.html',
  styleUrl: './detall.component.scss'
})

export class DetallComponent implements OnInit {

  videojoc: any;
  
  constructor(
    private route: ActivatedRoute,
    private videojocService: VideojocService
  ) {}

  ngOnInit(): void {
    const id =
      Number(
        this.route.snapshot.paramMap.get('id')
      );

    this.videojoc =
      this.videojocService
      .obtenirVideojocPerId(id);
  }
}