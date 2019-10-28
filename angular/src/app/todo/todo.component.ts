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
  userId: number = 1;

  constructor(private user: UsersService) { }

  ngOnInit() {
      this.user.getTasks(this.userId).subscribe(data => {
      this.taskList = data;
    });
  }

  newTask() {
    let newTask = 
      {
        completed: false,
        task: null,
        task_id: 0
      }
    if (!document.getElementById("0")) {
      console.log(newTask);
    this.addTaskList.push(newTask);
    } else {
      console.log("found item with id 0")
      return false;
    }
    // let arrayLength = this.addTaskList.length;
    // let newTask = 
    //   {
    //     completed: false,
    //     task: null,
    //     task_id: 0
    //   }
    // if (this.addTaskList.length === 0) {
    //   console.log(newTask);
    // this.addTaskList.push(newTask);
    // } else if ((<HTMLInputElement>document.getElementById(`${arrayLength-1}`)).value !== ""){
    //   this.addTaskList.push(newTask);
    // } else {
    //   return false;
    // }
  }
}
