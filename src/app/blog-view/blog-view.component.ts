import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  public currentBlog;

  public allBlogs = [
    {
      blogId: 1,
      created: new Date(2018, 1, 20),
      author: "Admin",
      category: "Comedy",
      isPublished: true,
      views: 0,
      description: "This is Blog 1 description",
      title: "This is Blog 1",
    },
    {
      blogId: 2,
      created: new Date(2018, 2, 20),
      author: "Admin",
      category: "Comedy",
      isPublished: true,
      views: 23,
      description: "This is Blog 2 description",
      title: "This is Blog 2",
    },
    {
      blogId: 3,
      created: new Date(2018, 3, 20),
      author: "Admin",
      category: "Comedy",
      isPublished: true,
      views: 21,
      description: "This is Blog 3 description",
      title: "This is Blog 3",
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let myBlogId = this.route.snapshot.paramMap.get('blogId');
    this.singleBlog(myBlogId);
  }

  public singleBlog(currentBlogId): any{
    for(let blog of this.allBlogs) {
      if(blog.blogId == currentBlogId)
        this.currentBlog = blog;
    }
  }

}
