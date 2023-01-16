import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { FirestoreService } from 'src/app/services/firestore.service';
import { DialogAddChannelComponent } from '../dialog-add-channel/dialog-add-channel.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  channels: any;

  showMenu: boolean;
  constructor(
    media: MediaMatcher,
    changeDetectorRef: ChangeDetectorRef,
    private firestore: FirestoreService,
    public auth: Auth,
    private dialog: MatDialog
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

  openDialogAddChannel() {
    this.dialog.open(DialogAddChannelComponent, { width: '320px' });
  }
}
