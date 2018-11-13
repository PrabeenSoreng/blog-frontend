import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../services/blog-http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  currentBlog;
  possibleCategories = ['Comedy', 'Drama', 'Action', 'Technology'];

  constructor(
    private blogHttpService: BlogHttpService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let blogId = this.route.snapshot.paramMap.get('blogId');
    this.blogHttpService.getBlog(blogId)
      .subscribe(
        data => this.currentBlog = data['data'],
        error => console.log(error.errorMessage)
      );
  }

  onEdit() {
    this.blogHttpService.updateBlog(this.currentBlog.blogId, this.currentBlog)
      .subscribe(
        data => this.router.navigate(['/blog', this.currentBlog.blogId]),
        error => console.log(error.error.Message)
      );
  }

}
