import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostListComponent } from './post-list/post-list.component';
import {BlogService} from './blog.service';

const blogRoutes: Routes = [
  {
    path: 'posts',
    component: PostListComponent
  },
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PostEditComponent,
    NotFoundComponent,
    PostEditComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(blogRoutes)
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
