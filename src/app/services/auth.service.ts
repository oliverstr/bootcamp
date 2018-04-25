import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService implements CanActivate {

  constructor( public firebaseAuth: AngularFireAuth ) { }

  canActivate(): boolean {
    console.log('CanActivate was called');
    return true;
  }

  loginWithGoogle() {
    this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginWithFacebook() {
    this.firebaseAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  logout() {
    this.firebaseAuth.auth.signOut();
  }

}
