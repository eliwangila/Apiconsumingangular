import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {IBlog, ILike} from '../shared/interfaces';

const API_URL = environment.apiURL

@Injectable()
export class LikeService {

  constructor(private http: HttpClient) {
  }

  getLikes(search='') {
    const query = search ? `/?search=${search}` : ''
    return this.http.get<ILike[]>(`${API_URL}/like${query}`)
  }

  getLikesById(id: string) {
    return this.http.get<ILike[]>(`${API_URL}/like/?blog__id=${id}`)
  }

  performLike(id: string) {
    return this.http.post<any>(`${API_URL}/like/`, {"user": 0,"blog": id})
  }
}
