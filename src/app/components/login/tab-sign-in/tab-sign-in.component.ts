import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tab-sign-in',
  templateUrl: './tab-sign-in.component.html',
  styleUrls: ['./tab-sign-in.component.scss'],
})
export class TabSignInComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    const { email, password } = this.loginForm.value;
    this.auth
      .signIn(email, password)
      .then(() => {
        this.router.navigate(['/room/9JAgfPq5MoK8eeras1YV']);
      })
      .catch((err) => console.log(err.message));
  }

  anonymSignIn() {
    this.auth.anonymSignIn().then(() => {
      this.auth.anonymUpdateDispalyName();
      this.router.navigate(['room/9JAgfPq5MoK8eeras1YV']);
    });
  }
}
