import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { MatDialogRef } from '@angular/material/dialog';
import { Channel } from 'src/app/models/channel';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-dialog-add-channel',
  templateUrl: './dialog-add-channel.component.html',
  styleUrls: ['./dialog-add-channel.component.scss'],
})
export class DialogAddChannelComponent implements OnInit {
  channel = new Channel();
  constructor(
    private auth: Auth,
    private firestore: FirestoreService,
    public dialogRef: MatDialogRef<DialogAddChannelComponent>
  ) {}

  ngOnInit(): void {}

  saveChannel() {
    this.channel.user = this.auth.currentUser.displayName;
    this.firestore.create('channels', this.channel.toJSON());
    this.dialogRef.close();
  }
}
