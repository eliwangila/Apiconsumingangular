import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.scss']
})
export class NewBlogComponent {
  imageFile = null;

  constructor(
    private blogService: BlogService,
    private router: Router,
  ) {
  }

  onFileChange(event: any) {
    this.imageFile = event.target.files[0];
  }

  addBlog(form: NgForm) {
    if (form.invalid) {return;}

    form.value.image = this.imageFile

    this.blogService.createBlog(form.value).subscribe({
      next: () => {
        this.router.navigate(['/blogs']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
