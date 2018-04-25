import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public authService: AuthService) { }

  loginGoogle() {
    this.authService.loginWithGoogle();
  }

  loginFacebook() {
    this.authService.loginWithFacebook();
  }

  logout() {
    this.authService.logout();
  }
}
