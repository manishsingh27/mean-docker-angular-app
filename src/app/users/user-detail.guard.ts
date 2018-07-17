import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailGuard implements CanActivate {

  constructor(private router: Router) { }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const id = +next.url[1].path;
    if (isNaN(id) || id < 1) {
      alert('Invalid user Id');
      this.router.navigate(['/users']);
      return false;
    }
    return true;

  }
}
