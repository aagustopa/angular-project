import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirestoreService } from '../services/firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private authService$: FirestoreService, private router: Router) { }

  canActivate(): boolean {

    // if the user is not logged in we'll send them back to the home page
    console.log(this.authService$.isLogged());
    if (!this.authService$.isLogged()) {
      console.log('you are not logged');
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
