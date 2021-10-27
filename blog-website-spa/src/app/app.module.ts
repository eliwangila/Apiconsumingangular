import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BlogModule} from "./blog/blog.module";
import { CoreModule } from './core/core.module';
import {SharedModule} from "./shared/shared.module";
import { NotFoundComponent } from './not-found/not-found.component';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import {LikeModule} from "./like/like.module";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BlogModule,
    UserModule,
    CoreModule,
    LikeModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
