import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  userId: number = 1;
  @Input() task: any;
  @Input() index: number;
  taskText: String;
  onChange: boolean = false;
  constructor(private user: UsersService) { }

  ngOnInit() {
  }

  enterTask(taskItem) {
    let input = document.getElementById(taskItem.task_id);
    input.blur();
  }


  onChangeEvent(taskItem) {
    let input = document.getElementById(taskItem.task_id);
    let inputTrim = (<HTMLInputElement>input).value.trim();
    let previousTask = taskItem.task;
    if (inputTrim === "") {
      return (<HTMLInputElement>input).value = previousTask;
    } else if (inputTrim !== previousTask) {
      let params = {
          "userId": this.userId,
          "taskId": taskItem.task_id,
          "task": inputTrim
      }
      this.user.updateTask(params).subscribe(() => {
        console.log(inputTrim, previousTask);
        console.log("post to database");
      });
    } else {
      console.log("Nothing");
    }
  }


  deleteTask(id){
    var params = {
      taskId: id
    }
    console.log(params);
    this.user.deleteTask(params).subscribe();
  }

}
