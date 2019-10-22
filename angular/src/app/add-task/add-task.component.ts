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
  onChange: boolean = true;

  constructor(private user: UsersService) { }

  ngOnInit() {
  }

    addTask(tempId) {
      var value = (<HTMLInputElement>document.getElementById(tempId)).value;
      if ( value.trim( )=== "" ||
      value.trim() === null ) {
        return false;
      } else {
      this.obj = {
        task: value.trim(),
        userId: 1
      }
      this.user.createTask(this.obj).subscribe();
      console.log("posted");
      }
    }
}
