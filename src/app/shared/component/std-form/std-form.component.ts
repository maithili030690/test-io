import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from '../../models/io';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
  @Output() stdEmmiter :EventEmitter<Istd> =new EventEmitter<Istd>()
  constructor() { }

  ngOnInit(): void {
  }

  onStdForm(stdForm:NgForm){
    console.log(stdForm.value)
    if(stdForm.valid){
      console.log(stdForm.value)
   
    this.stdEmmiter.emit(stdForm.value)
    stdForm.reset()
  }
  }
}
