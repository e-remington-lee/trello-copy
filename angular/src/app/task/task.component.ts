import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Object;
  @Input() index: number;
  isCompleted: boolean;
  constructor(private user: UsersService) { }

  ngOnInit() {

  }

  deleteTask(){
    console.log("delete task");
  }

  checkTask(checked) {
    this.isCompleted = checked;
    switch (checked) {
      case true:
        return 'line-through';
      case false:
        return 'none';
    }
  }

  lineThroughChange() {
    var x = document.getElementById(`${this.index}`);
    if (x.style.textDecoration === 'line-through') {
      document.getElementById(`${this.index}`).style.textDecoration = 'none';
      this.user.completeTask(true)
    } else if (x.style.textDecoration === 'none') {
      document.getElementById(`${this.index}`).style.textDecoration = 'line-through';
      //http request to change from false to true
    }
  }
}
