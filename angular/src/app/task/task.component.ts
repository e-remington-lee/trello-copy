import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: any;
  @Input() index: number;
  taskText: String;
  isCompleted: boolean;
  constructor(private user: UsersService) { }

  ngOnInit() {

  }

  abc(taskItem) {
    var input = (<HTMLInputElement>document.getElementById(taskItem.task_id)).value;
    var previousTask = taskItem.task;
    if (input !== previousTask) {
      console.log("post to database");
    } else {
      console.log("Nothing");
    }
  }

  deleteTask(taskId){
    console.log("delete task");
  }

  // checkTask(checked) {
  //   this.isCompleted = checked;
  //   switch (checked) {
  //     case true:
  //       return 'line-through';
  //     case false:
  //       return 'none';
  //   }
  // }

  // lineThroughChange(taskId) {
  //   var element = document.getElementById(`${this.index}`);
  //   if (element.style.textDecoration === 'line-through') {
  //     document.getElementById(`${this.index}`).style.textDecoration = 'none';
  //     var falseParam = {
  //       'task_id': taskId,
  //       'task': element.innerHTML,
  //       'completed': true
  //     }
  //     return this.user.completeTask(falseParam).subscribe();
  //   } else if (element.style.textDecoration === 'none') {
  //     document.getElementById(`${this.index}`).style.textDecoration = 'line-through';
  //     var trueParam = {
  //       'task_id': taskId,
  //       'task': element.innerHTML,
  //       'completed': false
  //     }
  //     return this.user.completeTask(trueParam).subscribe();
  //   }
  // }
}
