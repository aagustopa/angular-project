import { Injectable } from '@angular/core';
// import { auth } from 'firebase/app';
import { first } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  public user: User;

  constructor(private afAuth: AngularFireAuth) { }

  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      return result;
    } catch (err) {
      console.log(err);
    }
  }
  async register(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      return result;
    } catch (err) {
      console.log(err);
    }
  }
  async logout() {
    try {
      await this.afAuth.signOut();
    } catch (err) {
      console.log(err);
    }
  }
  getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
