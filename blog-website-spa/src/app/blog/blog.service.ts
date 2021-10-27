import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {IBlog, IBlogCreate, IBlogDetailed, IBlogEdit} from '../shared/interfaces';

const API_URL = environment.apiURL

@Injectable()
export class BlogService {

  constructor(private http: HttpClient) {
  }

  getBlogs(search = '') {
    const query = search ? `/?search=${search}` : ''
    return this.http.get<IBlog[]>(`${API_URL}/blog${query}`)
  }

  getBlogById(id: string) {
    return this.http.get<IBlogDetailed>(`${API_URL}/blog/${id}`)
  }

  getBlogsByAuthorUsername(username: string, search='') {
    const query = search ? `&&search=${search}` : ''
    return this.http.get<IBlog[]>(`${API_URL}/blog/?author__username=${username}` + query)
  }

  createBlog(blog: IBlogCreate) {
    let formData = new FormData();
    formData.append('topic', blog.topic)
    formData.append('title', blog.title)
    formData.append('content', blog.content)
    formData.append('image', blog.image)

    return this.http.post<IBlogDetailed>(`${API_URL}/blog/`, formData)
  }

  editBlogById(id: string, blog: IBlogEdit) {
    if (!blog.image) {
      delete blog.image
      return this.http.patch<IBlogDetailed>(`${API_URL}/blog/${id}/`, blog)
    }
      let formData = new FormData();
      formData.append('topic', blog.topic)
      formData.append('title', blog.title)
      formData.append('content', blog.content)
      formData.append('image', blog!.image)
      return this.http.put<IBlogDetailed>(`${API_URL}/blog/${id}/`, formData)
  }

  deleteBlogById(id: string) {
    return this.http.delete<void>(`${API_URL}/blog/${id}/`)
  }
}
