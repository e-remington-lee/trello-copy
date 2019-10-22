import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  createTask(user) {
    return this.http.post('/api/createTask', user);
  }

  getTasks(params) {
    const options = new HttpParams().set('userId', params);
    return this.http.get('/api/get', {params: options});
  }

  deleteTask(params) {
    return this.http.post('/api/deleteTask', params);
  }
}
