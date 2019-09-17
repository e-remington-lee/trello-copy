import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  task: String;

  constructor() { }

  ngOnInit() {
  }

  bob() {
    console.log(this.task);
  }

}
