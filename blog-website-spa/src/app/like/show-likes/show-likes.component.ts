import { Component } from '@angular/core';
import {ILike} from "../../shared/interfaces";
import { LikeService } from '../like.service';

@Component({
  selector: 'app-show-likes',
  templateUrl: './show-likes.component.html',
  styleUrls: ['./show-likes.component.scss']
})
export class ShowLikesComponent {
  likes: ILike[] | undefined;
  errorLoadingLikes = false;
  search: string | undefined = '';

  constructor(
    private likeService: LikeService,
  ) {
    this.getLikes()
  }

  getLikes(search?: string): void {
    this.likes = undefined;
    this.errorLoadingLikes = false;

    this.likeService.getLikes(search).pipe().subscribe(
      like => {
        this.likes = like // next fn
      },

      error => {
        console.error(error);
        this.errorLoadingLikes = true;
      }, // error fn
      () => console.log('load likes stream completed') // completed fn
    );
  }

  searchButtonHandler(searchInput: HTMLInputElement): void {
    const {value} = searchInput;
    this.search = value;
    this.getLikes(value);
  }

  refreshButtonHandler(): void {
    this.getLikes()
  }

  performLike(id: number): void {
    this.likeService.performLike(String(id)).subscribe()
    this.refreshButtonHandler()
  }
}
