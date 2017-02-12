import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import Post from './post';

@Injectable()
export class BlogService {
  constructor(private http: Http) {}

  getPosts(): Observable<Post[]> {
    return this.http
      .get('http://localhost:3000/posts')
      .map((res: Response): Post[] => {
        console.log(res);
        return res.json() as Post[]
      });
  }
}
