import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() taskObj: any;
  @Output() removeTaskByObj = new EventEmitter();

    emitToRemoveTask() {
        this.removeTaskByObj.emit(this.taskObj);
    }

}
