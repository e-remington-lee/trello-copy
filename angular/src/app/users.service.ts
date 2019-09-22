import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  postUser(user) {
    return this.http.post('/api/userId', JSON.stringify(user))
  }

  getUser() {
    // const options = new HttpParams().set('name', 'hello')
    return this.http.get('/api/get')
  }
}
