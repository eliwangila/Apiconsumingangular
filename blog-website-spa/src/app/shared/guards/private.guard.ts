import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router} from '@angular/router';
import {UserService} from "../../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class PrivateGuard implements CanActivate, CanLoad {
  constructor(private userService: UserService, private router: Router) { }

  canActivate() {
    return this.canLoad();
  }

  canLoad() {
    if (!this.userService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    return this.userService.isLoggedIn();
  }
}
