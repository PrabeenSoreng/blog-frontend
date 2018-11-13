import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { BlogService } from '../services/blog.service';
import { BlogHttpService } from '../services/blog-http.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  currentBlog;

  constructor(
    private blogHttpService: BlogHttpService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    let myBlogId = this.route.snapshot.paramMap.get('blogId');
    this.currentBlog = this.blogHttpService.getBlog(myBlogId)
      .subscribe(
        data => this.currentBlog = data['data'],
        error => console.log(error.errorMessage)
      );
  }

  onDelete() {
    this.blogHttpService.deleteBlog(this.currentBlog.blogId)
      .subscribe(
        data => this.router.navigate(['/home']),
        error => console.log(error.errorMessage)
      );
  }

  onGoBack() {
    this.location.back();
  }
}
