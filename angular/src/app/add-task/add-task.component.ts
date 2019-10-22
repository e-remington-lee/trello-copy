import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  @Input() task;
  obj: Object;

  constructor(private user: UsersService) { }

  ngOnInit() {
  }

    addTask(tempId) {
    if ((<HTMLInputElement>document.getElementById(tempId)).value) {
      return false;
    } else {
    this.obj = {
      task: this.task,
      userId: 1
    }
    this.user.createTask(this.obj).subscribe();
    }
  }


}
