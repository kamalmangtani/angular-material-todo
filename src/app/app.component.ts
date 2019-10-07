import { Component } from '@angular/core';
import { Todo } from '../models/todo';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-material';
  taskList : Todo[] = [];
  taskFormControl : FormControl = new FormControl('');
  taskStatusFormControl : FormControl = new FormControl('');

  addTask() {
    let todo : Todo = new Todo(this.taskFormControl.value,false);
    this.taskList.push(todo);
    this.taskFormControl.reset();
    this.taskStatusFormControl.reset();
  }

  updateTask(t:Todo) {
    t.isCompleted = !t.isCompleted;
  }
}
