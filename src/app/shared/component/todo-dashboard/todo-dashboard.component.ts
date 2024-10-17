import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../models/io';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
 todoArr : Array<Itodo>=[		
 {		
   todoItem:"javascript",		
   todoRating:4		
  },		
 {		
   todoItem:"flex",		
   todoRating:3		
  },		
  {		
   todoItem:"Node",		
   todoRating:2		
  },		
  {		
   todoItem:"Angular",		
   todoRating:4		
  }		
 ]		
  
  constructor() { }

  ngOnInit(): void {
  }

 
  getTodoData(todo:Itodo){
    this.todoArr.unshift(todo)
  }

}
