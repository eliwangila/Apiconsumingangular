import {ChangeDetectorRef, Component} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from 'src/app/user/user.service';
import {IBlogDetailed, IUser} from "../../shared/interfaces";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  get isLogged(): boolean {
    return this.userService.isLoggedIn();
  }

  get username(): string {
    return localStorage.getItem('username') || '';
  }
  constructor(
    private router: Router,
    private userService: UserService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
  }

  logoutButtonHandler() {
    this.userService.logoutUser()
    // this.router.navigate(['/blogs'])
    return this.changeDetectorRef.detectChanges();
  }
}
