import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allBlogs;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.allBlogs = this.blogService.getAllBlogs();
  }

}
