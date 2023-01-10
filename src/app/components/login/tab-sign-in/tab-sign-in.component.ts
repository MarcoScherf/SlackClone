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
  @Output() Auth = new EventEmitter<string>();

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.Auth.emit('test');
    const { email, password } = this.loginForm.value;
    this.auth
      .signIn(email, password)
      .then(() => {
        this.router.navigate(['/channel']);
      })
      .catch((err) => console.log(err.message));
  }

  anonymSignIn() {
    this.Auth.emit('test');
    this.auth.anonymSignIn().then(() => {
      this.auth.anonymUpdateDispalyName();
      this.router.navigate(['channel']);
    });
  }
}
