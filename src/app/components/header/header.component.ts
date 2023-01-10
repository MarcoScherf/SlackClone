import { Component, Input, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';

import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() auth: boolean;
  constructor(private sidennavService: SidenavService, public Auth: Auth) {}

  ngOnInit(): void {}
  close() {
    this.sidennavService.toggle();
  }
}
