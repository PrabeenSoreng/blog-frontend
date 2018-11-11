import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
