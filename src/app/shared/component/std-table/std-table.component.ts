import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../../models/io';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
@Input() stdData!:Array<Istd>
  constructor() { }

  ngOnInit(): void {
  }

}
