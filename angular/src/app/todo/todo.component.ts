import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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
      console.log(this.taskList);
      console.log(this.addTaskList);
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
  }

  drop(event: CdkDragDrop<any>) {
    moveItemInArray(this.taskList, event.previousIndex, event.currentIndex);
  }
}
