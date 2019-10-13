import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() taskList: Object;
  isCompleted: boolean = false;
  constructor() { }

  ngOnInit() {

  }

  deleteTask(){
    console.log("delete task");
  }

  checkTask(checked) {
    switch (checked) {
      case true:
        return 'line-through';
      case false:
        return null;
    }
  }

  lineThroughChange(checked) {
    if (checked) {
      
      this.isCompleted = false;
      this.checkTask(this.isCompleted);
      console.log('false one');
    } else {
      this.isCompleted = true;
      this.checkTask(this.isCompleted);
      console.log('true one');
    }
  }
}
