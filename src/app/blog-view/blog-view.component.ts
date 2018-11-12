import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router
  ) { }

  ngOnInit() {
    let myBlogId = Number(this.route.snapshot.paramMap.get('blogId'));
    this.currentBlog = this.blogService.getBlog(myBlogId);
  }
}
