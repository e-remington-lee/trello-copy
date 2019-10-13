import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() taskList: Object;
  isChecked: boolean = false;
  constructor() { }

  ngOnInit() {
    if(this.taskList.completed)
  }

  deleteTask(){
    
    console.log("delete task");
  }

  checkTask() {
    this.isChecked = true;
    console.log("check task");
  }
}
