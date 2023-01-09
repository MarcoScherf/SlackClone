import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor() {}

  ngOnInit(): void {}
}
