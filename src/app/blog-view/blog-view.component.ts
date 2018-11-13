import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  public currentBlog;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    let myBlogId = Number(this.route.snapshot.paramMap.get('blogId'));
    this.currentBlog = this.blogService.getBlog(myBlogId);
  }

  onGoBack() {
    this.location.back();
  }
}
