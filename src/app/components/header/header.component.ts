import { Component, Input, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() auth: boolean;
  constructor(
    private sidennavService: SidenavService,
    public Auth: Auth,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  close() {
    this.sidennavService.toggle();
  }

  logout() {
    if (this.Auth.currentUser.isAnonymous) {
      this.authService.deleteUsers();
    }
    this.authService.logout().then(() => {
      this.router.navigate(['login']);
    });
  }
}
