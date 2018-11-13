import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  currnetBlog;
  allBlogs = [
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
    },
    {
      blogId: 4,
      created: new Date(2018, 4, 20),
      author: "Admin",
      category: "Comedy",
      isPublished: true,
      views: 21,
      description: "This is Blog 4 description",
      title: "This is Blog 4",
    }
  ];

  constructor() { }

  getAllBlogs() {
    return this.allBlogs;
  }

  getBlog(blogId) {
    for(let blog of this.allBlogs) {
      if(blog.blogId === blogId)
        this.currnetBlog = blog;
    }
    return this.currnetBlog;
  }
}
