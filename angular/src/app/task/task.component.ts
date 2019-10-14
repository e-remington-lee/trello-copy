import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() taskList: Object;
  isCompleted: boolean;
  constructor() { }

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
    var x = document.getElementById("taskText");
    if (x.style.textDecoration === 'line-through') {
      document.getElementById("taskText").style.textDecoration = 'none';
      //http request to change from true to false
    } else if (x.style.textDecoration === 'none') {
      document.getElementById("taskText").style.textDecoration = 'line-through';
      //http request to change from false to true
    }
  }
}
