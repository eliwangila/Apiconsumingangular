import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowLikesComponent } from './show-likes/show-likes.component';
import {SharedModule} from "../shared/shared.module";
import {LikeRoutingModule} from "./like-routing.module";
import {LikeService} from "./like.service";
import { LikeButtonComponent } from './like-button/like-button.component';
import {CoreModule} from "../core/core.module";



@NgModule({
  declarations: [
    ShowLikesComponent,
    LikeButtonComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        LikeRoutingModule,
        CoreModule,
    ],
  exports: [
    LikeButtonComponent
  ],
  providers: [
    LikeService
  ]
})
export class LikeModule { }
