import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  @Input() task;

  constructor() { }

  ngOnInit() {
  }

  value(tempId){
    console.log((<HTMLInputElement>document.getElementById(tempId)).value)
 }
}
