import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  task: String = null;
  obj: Object;
  taskList: Object;
  show: boolean;  
  userId: number = 1;

  constructor(private user: UsersService) { }

  ngOnInit() {
  }

  addTask() {
    if (this.task === "" || this.task === null) {
      return false;
    }
    this.obj = {
      task: this.task,
      userId: 1
    }
    this.user.postUser(this.obj).subscribe(() => {
      this.show = true;
    });
  }

  getTasks() {
    this.user.getTasks(this.userId).subscribe(data => {
      this.taskList = data;
      console.log(data);
    });
  }
}
