import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/models/todo';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  
  ngOnInit() {
    
  }
  
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
