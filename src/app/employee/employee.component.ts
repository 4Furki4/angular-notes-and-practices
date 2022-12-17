import { Component, Self, SkipSelf } from '@angular/core';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  employeeName = "Furkan";


  constructor(){

  }
}
