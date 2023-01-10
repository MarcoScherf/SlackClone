import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  deleteUser,
  sendPasswordResetEmail,
  signInAnonymously,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userName: string;
  userImg: string;
  userEmail: string;

  constructor(private auth: Auth) {}

  signIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  updateUsers(name: string) {
    return updateProfile(this.auth.currentUser, {
      displayName: name,
    });
  }

  logout() {
    return signOut(this.auth);
  }

  deleteUsers() {
    const user = this.auth.currentUser;
    return deleteUser(user);
  }

  anonymSignIn() {
    return signInAnonymously(this.auth);
  }

  anonymUpdateDispalyName() {
    return updateProfile(this.auth.currentUser, {
      displayName: 'Guest',
    });
  }
  get isLoggedIn(): boolean {
    return this.auth.currentUser ? true : false;
  }
}
