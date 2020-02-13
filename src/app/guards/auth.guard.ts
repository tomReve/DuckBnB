import { Injectable } from '@angular/core';
// On rajoute le Router
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // Dans le constructeur on déclare notre variable de routage
  constructor(private router: Router, private storage: Storage) {
  }

  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.storage.get('userAuthenticated').then((userAuthenticated) => {
      if (userAuthenticated) {
        return true;
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
}
