import {Component, OnInit} from '@angular/core';
import {IBlogDetailed} from "../../shared/interfaces";
import {BlogService} from "../blog.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent {
  blog: IBlogDetailed | undefined;
  imageFile = null;

  constructor(
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.getBlogDetailed()
  }

  onFileChange(event: any) {
    this.imageFile = event.target.files[0];
  }

  editBlog(form: NgForm) {
    if (form.invalid) {return;}
    const id = this.activatedRoute.snapshot.params.blogId;
    form.value.image = this.imageFile

    this.blogService.editBlogById(id, form.value).subscribe({
      next: () => {
        this.router.navigate([`/blogs/${id}`]);
      },
      error: (err) => {
        console.log(err);
        console.error(err.message);
      }
    })
  }

  getBlogDetailed(): void {
    this.blog = undefined;
    const id = this.activatedRoute.snapshot.params.blogId;
    this.blogService.getBlogById(id).subscribe(blog => this.blog = blog)
  }

}
