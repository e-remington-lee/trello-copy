import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  @Input() task;
  userId: number = 1;
  obj: Object;
  onChange: boolean = true;

  constructor(private user: UsersService) { }

  ngOnInit() {

  }

    onChangeEvent(taskItem) {
      if (document.getElementById(`${taskItem.task_id}`).id === "0") {
        return this.addTask(taskItem.task_id);
      } else {
        return this.updateTask(taskItem);
      }
    }

    addTask(taskId) {
      let value = (<HTMLInputElement>document.getElementById(taskId)).value;
      if ( value.trim() === "") {
        return false;
      } else {
      this.obj = {
        task: value.trim(),
        userId: 1
      }
      this.user.createTask(this.obj).subscribe(data => {
        this.task = data[0];
        // console.log(data[0]);
        });
      }
    }

    updateTask(taskItem){
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
        this.user.updateTask(params).subscribe(data => {
          this.task = data[0];
          console.log(data[0]);
          console.log(previousTask, inputTrim);
        });
      } else {
        console.log("Nothing");
      }
    }

    enterTask(taskId) {
      let input = document.getElementById(taskId);
      input.blur();
    }

    deleteTask(taskId) {
      let params = {
        "taskId": taskId
      }
      let child = document.getElementById(`row ${taskId}`);
      child.remove();
      console.log(params);
      this.user.deleteTask(params).subscribe();
    }

}
