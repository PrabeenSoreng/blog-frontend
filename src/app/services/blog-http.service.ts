import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  allBlogs;
  currentBlog;
  baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  authToken = 'YzZmYWQ5NmU0MzAxZTdjMjQ3ZjQwMmYwNGRjNDcwMGViZGU1MjJjOTYwYmFmMzE4NDkyOGQ4NTVlMWE0OTdmY2ZlOTQ4ZmVlOWU1NTZjYjUyNzUwNzJmMmNkNTIxYzRiOGUzYmNmMjE4NmM1ZDUxM2QwZjkxYzZkNDNmZWI0ZDkzMA==';

  constructor(private http: HttpClient) { }

  private handleError(err: HttpErrorResponse) {
    return throwError(err.message);
  }

  getAllBlogs() {
    return this.http.get(this.baseUrl+'/all?authToken='+this.authToken);
  }

  getBlog(blogId) {
    return this.http.get(this.baseUrl+'/view'+'/'+blogId+'?authToken='+this.authToken);
  }

  createBlog(blogData) {
    return this.http.post(this.baseUrl+'/create?authToken='+this.authToken, blogData);
  }

  updateBlog(blogId, blogData) {
    return this.http.put(this.baseUrl+'/'+blogId+'/edit?authToken='+this.authToken, blogData);
  }

  deleteBlog(blogId) {
    let data = {};
    return this.http.post(this.baseUrl+'/'+blogId+'/delete?authToken='+this.authToken, data);
  }
}
