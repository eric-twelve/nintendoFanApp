import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email = '';
  contrasenya = '';
  error = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  iniciarSessio(): void {

    const loginCorrecte =
      this.authService.login(
        this.email,
        this.contrasenya
      );

   if (loginCorrecte) {

  this.error = false;

  this.router.navigateByUrl('/preferits');



    } else {

      this.error = true;

    }
  }
}