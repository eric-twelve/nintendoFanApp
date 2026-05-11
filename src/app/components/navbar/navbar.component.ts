import { Component } from '@angular/core';

import {
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import { AsyncPipe } from '@angular/common';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    AsyncPipe
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {

  usuari$;

  constructor(
    public authService: AuthService
  ) {

    this.usuari$ =
      this.authService.obtenirUsuari();

  }

  logout(): void {

    this.authService.logout();

  }

}