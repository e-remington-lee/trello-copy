import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  task: String;
  getParams: string;
  obj: Object;
  show: boolean;

  constructor(private user: UsersService) { }

  ngOnInit() {
  }

  addTask() {
    this.show = true;
    if (this.task === "" || this.task === null) {
      return false;
    }
    this.obj = {
      task: this.task,
      userId: 1
    }
    this.user.postUser(this.obj).subscribe(data => {
      console.log(data);
    }
    )
  }

  getRequest() {
    this.user.getUser(this.getParams).subscribe(data => {
      console.log(data)
    })
  }
}
