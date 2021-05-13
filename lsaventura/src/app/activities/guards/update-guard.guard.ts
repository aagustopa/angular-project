import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UpdateActivityComponent } from '../components/update-activity/update-activity.component';

export interface CanComponentLeave {
  canLeave: () => boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UpdateGuardGuard implements CanDeactivate<CanComponentLeave> {
  canDeactivate(component: CanComponentLeave) {
    if (component.canLeave) {
      return component.canLeave();
    }
    return true;
  }

}