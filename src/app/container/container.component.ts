import { AfterContentInit, Component, ContentChild, Host } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements AfterContentInit {
  
  @ContentChild(EmployeeComponent) employeeContent !: EmployeeComponent;
  
  constructor(){

  }

  ngAfterContentInit(): void {
    console.log(this.employeeContent.employeeName);
    this.employeeContent.employeeName = "Furkan Cengiz";
    console.log(this.employeeContent.employeeName);
  }

}
