import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailedComponent } from './blog-detailed/blog-detailed.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import {SharedModule} from "../shared/shared.module";
import {BlogRoutingModule} from "./blog-routing.module";
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import {BlogService} from "./blog.service";
import {FormsModule} from "@angular/forms";
import {LikeModule} from "../like/like.module";
import {CoreModule} from "../core/core.module";
import { MyBlogsComponent } from './my-blogs/my-blogs.component';



@NgModule({
  declarations: [
    BlogsComponent,
    BlogDetailedComponent,
    NewBlogComponent,
    EditBlogComponent,
    MyBlogsComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        BlogRoutingModule,
        FormsModule,
        LikeModule,
        CoreModule
    ],
  providers: [
    BlogService,
  ]
})
export class BlogModule { }
