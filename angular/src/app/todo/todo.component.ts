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
  taskList: any;
  addTaskList: any[]=[];
  show: boolean;  
  userId: number = 1;

  constructor(private user: UsersService) { }

  ngOnInit() {
      this.user.getTasks(this.userId).subscribe(data => {
      this.taskList = data;
    });
  }

  addTask() {
    if (this.task === "" || this.task === null) {
      return false;
    } else {
    this.obj = {
      task: this.task,
      userId: 1
    }
    this.user.createTask(this.obj).subscribe(() => {
      this.show = true;
    });
    }
  }

  newTask() {
    let arrayLength = this.addTaskList.length;
    let newTask = 
      {
        completed: false,
        task: null,
        tempId: arrayLength
      }
    if (this.addTaskList.length === 0) {
      console.log(newTask);
    this.addTaskList.push(newTask);
    } else if ((<HTMLInputElement>document.getElementById(`${arrayLength-1}`)).value !== ""){
      this.addTaskList.push(newTask);
    } else {
      return false;
    }
  }
}
