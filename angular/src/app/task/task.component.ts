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
  onChange: boolean = false;
  constructor(private user: UsersService) { }

  ngOnInit() {

  }

  enterTask(taskItem) {
    var input = document.getElementById(taskItem.task_id);
    input.blur();
  }

  onChangeEvent(taskItem) {
    var input = document.getElementById(taskItem.task_id);
    var inputTrim = (<HTMLInputElement>input).value.trim();
    var previousTask = taskItem.task;
    if (inputTrim !== previousTask) {
      console.log(inputTrim, previousTask);
      console.log("post to database");
      return null
    } else {
      console.log("Nothing");
    }
  }

  // onChangeEvent(taskItem) {
  //   console.log("on change")
  //   return this.enterTask(taskItem);
  // }

  deleteTask(id){
    var params = {
      taskId: id
    }
    console.log(params);
    this.user.deleteTask(params).subscribe();
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
