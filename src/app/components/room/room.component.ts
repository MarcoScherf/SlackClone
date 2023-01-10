import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private auth: Auth
  ) {}

  ngOnInit(): void {
    console.log(this.auth.currentUser);
  }

  logout() {
    if (this.auth.currentUser.isAnonymous) {
      this.authService.deleteUsers();
    }
    this.authService.logout().then(() => {
      this.router.navigate(['login']);
    });
  }
}
