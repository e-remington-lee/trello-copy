import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  postUser(user) {
    return this.http.post('/api/createTask', user)
  }

  getUser(params) {
    const options = new HttpParams().set('information', params)
    return this.http.get('/api/get', {params: options})
  }
}
