import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import {Response} from '@angular/http';
import Post from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  private posts: Post[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getPosts()
      .subscribe(
        (posts: Post[]) => {
          this.posts = posts
          console.log(this.posts)
        },
        (err: Response) => console.log(err)
      );
  }

}
