import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

export interface ToDo {
  id: string;
  task: string;
  complete: boolean;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private partialTodo: Partial<ToDo> = {};
  completeToDos: Array<any> = [];
  incompleteToDos: Array<any> = [];

  constructor() {}

  addToDo() {
    const newToDo = {
      ...this.partialTodo,
      id: uuidv4(),
      complete: false,
    };
    this.incompleteToDos.push(newToDo);
  }

  onAddToDoChange(toDo: Partial<ToDo>) {
    this.partialTodo = toDo;
  }

  onCompleteToDo(toDo: ToDo) {
    this.incompleteToDos = this.incompleteToDos.filter(
      ({ id }) => id !== toDo.id
    );
    this.completeToDos.push({ ...toDo, complete: true });
  }

  onIncompleteToDo(toDo: ToDo) {
    this.completeToDos = this.completeToDos.filter(({ id }) => id !== toDo.id);
    this.incompleteToDos.push({ ...toDo, complete: false });
  }
}
