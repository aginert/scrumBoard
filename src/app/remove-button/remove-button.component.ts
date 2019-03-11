import {Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'remove-button',
  templateUrl: './remove-button.component.html',
  styleUrls: ['./remove-button.component.css']
})
export class RemoveButtonComponent {
@Output() action = new EventEmitter();
@Input() text: string;
emitAction() {
    this.action.emit();
}
}
