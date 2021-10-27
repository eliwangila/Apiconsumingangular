import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CookieService} from 'ngx-cookie-service';
import {Observable, of} from 'rxjs';
import {catchError, first, mapTo, retry, tap} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {ISimpleUser, IToken, IUser} from "../shared/interfaces";

const API_URL = environment.apiURL

@Injectable()
export class UserService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  user: IUser | null | undefined = undefined;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
  ) {
  }

  login(user: { username: string, password: string }): Observable<boolean> {
    return this.http.post<any>(`${API_URL}/auth/login`, user)
      .pipe(
        tap(tokens => this.doLoginUser(user.username, tokens)),
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        }));
  }


  isLoggedIn() {
    return !!this.getJwtToken();
  }

  refreshToken() {
    return this.http.post<any>(`${API_URL}/auth/refresh/`, {
      'token': this.getJwtToken()
    }).pipe(tap((token: IToken) => this.storeJwtToken(token)));
  }

  private doLoginUser(username: string, token: IToken): void {
    localStorage.setItem('username', username);
    this.storeJwtToken(token);
  }

  logoutUser() {
    localStorage.removeItem('username');
    this.cookieService.delete(this.JWT_TOKEN);
  }

  getJwtToken() {
    return this.cookieService.get(this.JWT_TOKEN);
  }

  private storeJwtToken(token: IToken) {
    this.cookieService.set(this.JWT_TOKEN, token.token);
  }

  searchUserByUsername(username: string): Observable<ISimpleUser[]> {
    return this.http.get<ISimpleUser[]>(`${API_URL}/auth/user/?search=${username}`)
  }

  getUserById(id: string) {
    return this.http.get<IUser>(`${API_URL}/auth/user/${id}`)
  }

  register(data: { username: string; email: string; password: string, password2: string }) {
    return this.http.post<IUser>(`${API_URL}/auth/user/`, data).pipe(
      tap((user) => this.user = user),
      retry(1),
    );
  }

}
