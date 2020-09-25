import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { post } from '../model/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css'],
})
export class PostlistComponent implements OnInit {
  posts: post[];
  constructor(private service: PostService, private router: Router) {}

  ngOnInit(): void {
    this.getPosts();
    //this.assignNames();
  }

  getPosts() {
    this.service.getPost().subscribe((response) => {
      console.log(response);
      this.posts = response;
      this.assignNames();
    });
  }

  assignNames() {
    this.posts.forEach(function (value) {
      switch (value.userId) {
        case 1:
          value.userName = 'Ajay';
          break;
        case 2:
          value.userName = 'Bunty';
          break;
        case 3:
          value.userName = 'Chintan';
          break;
        case 4:
          value.userName = 'Darshan';
          break;
        case 5:
          value.userName = 'Rakesh';
          break;
        case 6:
          value.userName = 'Mayank';
          break;
        case 7:
          value.userName = 'Ramesh';
          break;
        case 8:
          value.userName = 'Suresh';
          break;
        case 9:
          value.userName = 'Jay';
          break;
        case 10:
          value.userName = 'Prem';
          break;
        default:
          console.log('No such user');
          break;
      }
    });
  }
}
