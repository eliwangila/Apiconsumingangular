import { Component } from '@angular/core';
import { IBlog } from 'src/app/shared/interfaces';
import {BlogService} from "../blog.service";

@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.scss']
})
export class MyBlogsComponent {

  myBlogs: IBlog[] | undefined;
  errorLoadingBlogs = false;
  search: string | undefined = '';

  constructor(
    private blogService: BlogService,
  ) {
    this.getMyBlogs()
  }

  getMyBlogs(search?: string): void {
    this.myBlogs = undefined;
    this.errorLoadingBlogs = false;
    const username = localStorage.getItem('username') || '';
    this.blogService.getBlogsByAuthorUsername(username, search).subscribe(
      blog => {
        this.myBlogs = blog // next fn
      },

      error => {
        console.error(error);
        this.errorLoadingBlogs = true;
      }, // error fn
      () => console.log('load my blogs stream completed') // completed fn
    );
  }

  searchButtonHandler(searchInput: HTMLInputElement): void {
    const {value} = searchInput;
    this.search = value;
    this.getMyBlogs(value);
  }

  refreshButtonHandler(): void {
    this.getMyBlogs()
  }

  deleteBlogById(id: number): void {
    this.blogService.deleteBlogById(String(id)).subscribe()
    setTimeout(() => this.getMyBlogs(), 100)
  }
}
