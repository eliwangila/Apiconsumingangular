import {ChangeDetectionStrategy, Component,} from '@angular/core';
import {BlogService} from '../blog.service';
import {ActivatedRoute, Router} from "@angular/router";
import {IBlogDetailed} from 'src/app/shared/interfaces/blogDetailed';
import {UserService} from 'src/app/user/user.service';
import {ILike, IUser} from "../../shared/interfaces";
import {LikeService} from "../../like/like.service";

@Component({
  selector: 'app-blog-detailed',
  templateUrl: './blog-detailed.component.html',
  styleUrls: ['./blog-detailed.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class BlogDetailedComponent {
  profile: IUser | undefined;
  blog: IBlogDetailed | undefined;
  likes: ILike[] | undefined;
  isLiked: ILike | undefined;

  constructor(
    private userService: UserService,
    private blogService: BlogService,
    private likeService: LikeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.getBlogDetailed();
    this.getUserById()
    this.getLikeById()
  }

  getUserById(): void {
    this.profile = undefined;
    this.userService.getUserById('0').subscribe(profile => this.profile = profile)
  }

  getBlogDetailed(): void {
    this.blog = undefined;
    const id = this.activatedRoute.snapshot.params.blogId;
    this.blogService.getBlogById(id).subscribe(blog => this.blog = blog)
  }

  deleteBlogById(): void {
    const id = this.activatedRoute.snapshot.params.blogId;
    this.blogService.deleteBlogById(id).subscribe()
    this.router.navigate(['/blogs'])
  }

  editBlogById(): void {
    const id = this.activatedRoute.snapshot.params.blogId;
    this.router.navigate([`/blogs/${id}/edit`])
  }

  getLikeById(): void {
    const id = this.activatedRoute.snapshot.params.blogId;
    this.likeService.getLikesById(id).subscribe(
      {
        next: (like) => {
          this.likes = like;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          this.isLiked = this.likes![0];
          console.log(this.isLiked);
        }
      }
    )
  }

  performLike(): void {
    const id = this.activatedRoute.snapshot.params.blogId;
    this.likeService.performLike(id).subscribe(like => this.isLiked = like)
  }

}
