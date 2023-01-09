import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  channels: any;
  constructor(
    media: MediaMatcher,
    changeDetectorRef: ChangeDetectorRef,
    private firestore: FirestoreService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 800px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.getAllChannels();
  }

  getAllChannels() {
    this.firestore.getAll('channels').subscribe((channels) => {
      this.channels = channels;
    });
  }
}
