import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { BlogHttpService } from '../services/blog-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allBlogs;

  constructor(private blogHttpService: BlogHttpService) { }

  ngOnInit() {
    this.blogHttpService.getAllBlogs()
      .subscribe(
        data => this.allBlogs = data['data'],
        error => console.log(error.errorMessage)
      );
  }

}
