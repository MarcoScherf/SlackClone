import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tab-sign-up',
  templateUrl: './tab-sign-up.component.html',
  styleUrls: ['./tab-sign-up.component.scss'],
})
export class TabSignUpComponent implements OnInit {
  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  signUp() {
    const { name, email, password } = this.loginForm.value;
    this.authService
      .signUp(email, password)
      .then(() => {
        this.authService.updateUsers(name);
        this.router.navigate(['room/9JAgfPq5MoK8eeras1YV']);
      })
      .catch((err) => console.log(err.message));
  }
}
