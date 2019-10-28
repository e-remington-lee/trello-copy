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

    addTask(taskId) {
      let value = (<HTMLInputElement>document.getElementById(taskId)).value;
      if ( value.trim() === "") {
        return false;
      } else {
      this.obj = {
        task: value.trim(),
        userId: 1
      }
      this.user.createTask(this.obj).subscribe(() => {
        // need to call a method that returns the last item of the user task item list,
        //which then returns the data we need!!! which completes the circle!!
        return console.log("posted");
        });
      }
    }

    enterTask(taskId) {
      let input = document.getElementById(taskId);
      input.blur();
    }

    onChangeEvent(taskItem) {
      if (document.getElementById(`${taskItem.task_id}`).id === "0") {
        return console.log("it no promise accepted");
      } else {
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
            this.user.getSingleTask(params).subscribe(data => {
              this.task = data[0];
              console.log(inputTrim, previousTask);
              console.log(data[0]);
            });
          });
        } else {
          console.log("Nothing");
        }
      }

    }
}
