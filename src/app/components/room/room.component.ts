import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from 'src/app/models/message';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  roomId: string;
  chat: any;
  channelName: string;
  message = new Message();

  constructor(
    private authService: AuthService,
    private router: Router,
    private auth: Auth,
    private route: ActivatedRoute,
    private firestoreService: FirestoreService
  ) {}

  ngOnInit(): void {
    console.log(this.auth.currentUser);
    this.getThreads();
  }

  getThreads() {
    this.route.paramMap.subscribe((params) => {
      this.roomId = params.get('id');
      this.getChannelName(params.get('id'));
      this.firestoreService.getAll(params.get('id')).subscribe((data) => {
        this.chat = data.sort((mess1: any, mess2: any) => {
          return mess1.time - mess2.time;
        });
      });
    });
  }

  getChannelName(roomId: string) {
    this.firestoreService.get('channels', roomId).subscribe((channel) => {
      this.channelName = channel['name'];
    });
  }

  saveNewMessage() {
    (this.message.time = Date.now()),
      (this.message.user = this.auth.currentUser.displayName);
    this.firestoreService.create(this.roomId, this.message.toJSON());
  }

  logout() {
    if (this.auth.currentUser.isAnonymous) {
      this.authService.deleteUsers();
    }
    this.authService.logout().then(() => {
      this.router.navigate(['login']);
    });
  }
}
