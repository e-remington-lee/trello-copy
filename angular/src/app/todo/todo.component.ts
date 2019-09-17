import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  task: String;
  obj: Object;

  constructor(private user: UsersService) { }

  ngOnInit() {
  }

  addTask() {
    this.obj = {
      input: this.task,
      userId: '1'
    }
    console.log(this.obj);
    this.user.postUser(this.obj);
  }
}
