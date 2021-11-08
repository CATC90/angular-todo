import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

import { ToDo } from '../../app.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  @Input() toDos!: ToDo[];

  @Output() toDoChange = new EventEmitter<ToDo>();

  constructor() {}

  onCompleteChange(toDo: ToDo, change: MatCheckboxChange) {
    this.toDoChange.emit({
      ...toDo,
      complete: change.checked,
    });
  }
}
