import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  constructor(private router: Router,
    public socialAuthServive: SocialAuthService) {
}

logout(): void {
this.socialAuthServive.signOut().then(() => this.router.navigate(['login']));
}
}
