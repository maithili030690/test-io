import { Component, OnInit } from '@angular/core';
import { Istd } from '../../models/io';

@Component({
  selector: 'app-std-dashboard',
  templateUrl: './std-dashboard.component.html',
  styleUrls: ['./std-dashboard.component.scss']
})
export class StdDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  stdArr : Array<Istd> =[
      {		
       fname:'Jhon',		
       lname:'Doe',		
       email:'jd@gmail.com',		
       contact:9874563220,		
       isActive:"in-active"		
      },		
      {		
      fname:'June',		
       lname:'Dow',		
      email:'jd@gmail.com',		
      contact:9874563210,		
      isActive:"active"		
      },		
      {		
       fname:'July',		
       lname:'Drew',		
       email:'jd@gmail.com',		
       contact:9874563212,		
       isActive:"in-active"		
      },		
       {		
       fname:'August',		
       lname:'Don',		
       email:'jd@gmail.com',		
       contact:9874563214,		
       isActive:"active"		
      },		
      {		
       fname:'Sep',		
       lname:'Down',		
       email:'jd@gmail.com',		
       contact:9874563215,		
       isActive:"active"		
       },		
      
  ]
  getStdData(std:Istd){
    this.stdArr.unshift(std)
  }
}
