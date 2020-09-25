import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { post } from '../model/post';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPost() {
    return this.http.get<post[]>(`https://jsonplaceholder.typicode.com/posts`);
  }
}
