import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirestoreService } from '../services/firestore/firestore.service';
import { take, switchMap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private authService$: FirestoreService, private router: Router, private auth: AngularFireAuth) { }

  canActivate() {

    // if the user is not logged in we'll send them back to the home page
    // console.log(this.authService$.isLogged());
    // if (!this.authService$.isLogged()) {
    //   console.log('you are not logged');
    //   this.router.navigate(['/login']);
    //   return false;
    // }
    return this.auth.authState.pipe(
      take(1),
      switchMap(async (authState) => {
        if (authState) {
          return true;
        } else {
          console.log('No autenticado');
          return false;
        }
      })
    )
  }

}
