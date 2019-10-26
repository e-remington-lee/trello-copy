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
    var input = document.getElementById(taskItem.task_id);
    input.blur();
  }


  onChangeEvent(taskItem) {
    var input = document.getElementById(taskItem.task_id);
    var inputTrim = (<HTMLInputElement>input).value.trim();
    var previousTask = taskItem.task;
    if (inputTrim === "") {
      return (<HTMLInputElement>input).value = previousTask;
    } else if (inputTrim !== previousTask) {
      this.user.getTasks(this.userId).subscribe(() => {
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
