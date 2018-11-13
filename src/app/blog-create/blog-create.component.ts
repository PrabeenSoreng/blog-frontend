import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../services/blog-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  blogTitle: string;
  blogDescription: string;
  blogCategory: string;
  possibleCategories = ["Comedy", "Drama", "Action", "Technology"];

  constructor(
    private router: Router,
    private blogHttpService: BlogHttpService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    let blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogTitle,
      category: this.blogCategory
    };
    console.log(form);
    this.blogHttpService.createBlog(blogData)
      .subscribe(
        (data: any) => {
          this.router.navigate(['/blog', data.data.blogId])
        },
        error => console.log(error.errorMessage)
      );

  }

}
