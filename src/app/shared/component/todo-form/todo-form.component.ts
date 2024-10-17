import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../models/io';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
@Output() todoEmmiter : EventEmitter<Itodo> = new EventEmitter<Itodo>()
  constructor() { }

  ngOnInit(): void {
  }
  onTodoAdd(todoForm:NgForm){
    
    if(todoForm.valid){
      console.log(todoForm)
      if(todoForm.valid){
       console.log(todoForm.value)
       this.todoEmmiter.emit(todoForm.value)
       todoForm.reset()
      }
    }
  }
}
