import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Post {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  yoast_head_json: {
    og_image: {
      url: string;
    }[];
  };
  link: string;
}


@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiURL = 'https://boavistafc.pt/wp-json/wp/v2/posts';

  constructor(private http: HttpClient) { }

  fetchPosts(page: number): Observable<Post[]> {
    return this.http.get<any[]>(`${this.apiURL}?page=${page}`);
  }
}
