import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

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

  updateTask(params) {
    return this.http.post('/api/updateTask', params);
  }

  getSingleTask(params){
    // const headersDict = {
    //   'Content-Type': 'application/json',
    //   'Accept': 'application/json',
    //   'Access-Control-Allow-Headers': 'Content-Type',
    //   'userId': params.userId,
    //   'taskId': params.taskId
    // }

    // return this.http.get('/api/getSingleTask', {headers: new HttpHeaders(headersDict)})
    const options = new HttpParams().set('userId', params.userId).set('taskId', params.taskId);
    return this.http.get('/api/getSingleTask', {params: options});
  }
}
