import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { first } from 'rxjs';
import { ToDo } from 'src/app/app.component';
import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  it('should create the app', () => {
    const fixture = TestBed.createComponent(TodoFormComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should return object with the value of the input on changes`, () => {
    const fixture = TestBed.createComponent(TodoFormComponent);
    const todoFormComponent = fixture.componentInstance;

    spyOn(todoFormComponent.toDoChange, 'emit');

    todoFormComponent.ngOnInit();

    todoFormComponent.task.setValue('to do testing');
    todoFormComponent.task.updateValueAndValidity();

    expect(todoFormComponent.toDoChange.emit).toHaveBeenCalledWith({
      task: 'to do testing',
    });
  });
});
