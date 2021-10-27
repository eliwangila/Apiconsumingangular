import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogsComponent} from "./blogs/blogs.component";
import {BlogDetailedComponent} from "./blog-detailed/blog-detailed.component";
import { NewBlogComponent } from './new-blog/new-blog.component';
import {EditBlogComponent} from "./edit-blog/edit-blog.component";
import { PrivateGuard } from '../shared/guards/private.guard';
import {MyBlogsComponent} from "./my-blogs/my-blogs.component";

const routes: Routes = [
  {
    path: 'blogs',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: BlogsComponent,
      },
      {
        path: 'add',
        component: NewBlogComponent,
        canActivate: [PrivateGuard]
      },
      {
        path: 'owned',
        component: MyBlogsComponent,
        canActivate: [PrivateGuard]
      },
      {
        path: ':blogId',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: BlogDetailedComponent,
          },
          {
            path: 'edit',
            component: EditBlogComponent,
            canActivate: [PrivateGuard]
          }
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
