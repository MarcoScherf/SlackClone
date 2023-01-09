import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SidenavService } from './services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SlackClone';
  mobileQuery!: MediaQueryList;
  currentRoute!: string;
  routerSubscription!: Subscription;
  authStateSubscription!: Subscription;
  userSubscription!: Subscription;

  @ViewChild('drawer') public sidenav: MatDrawer;
  private _mobileQueryListener: () => void;
  authUser!: any;
  user!: any;

  ngOnInit() {
    this.sideNavService.sideNavToggleSubject.subscribe(() => {
      this.sidenav?.toggle();
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    if (this.routerSubscription) this.routerSubscription.unsubscribe();
    if (this.authStateSubscription) this.authStateSubscription.unsubscribe();
    if (this.userSubscription) this.userSubscription.unsubscribe();
  }

  constructor(
    private router: Router,
    private sideNavService: SidenavService,
    changeDetectorRef: ChangeDetectorRef,
    // private dataService: DataService,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 815px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
}
