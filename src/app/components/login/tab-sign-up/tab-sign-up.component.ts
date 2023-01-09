import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor() {}

  ngOnInit(): void {}
}
