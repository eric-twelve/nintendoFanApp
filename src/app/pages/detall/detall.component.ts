import {
  Component,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { VideojocService } from '../../services/videojoc.service';

@Component({
  selector: 'app-detall',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './detall.component.html',
  styleUrl: './detall.component.scss'
})

export class DetallComponent implements OnInit {

  id: string | null = null;

  videojoc: any;

  constructor(
    private route: ActivatedRoute,
    private videojocService: VideojocService
  ) {}

  ngOnInit(): void {

    this.id =
      this.route.snapshot.paramMap.get('id');

    this.videojoc =
      this.videojocService
        .obtenirVideojocPerId(
          Number(this.id)
        );

  }

}