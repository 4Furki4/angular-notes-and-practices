import { Component, Self, SkipSelf } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  employeeName = "Furkan";


  constructor(private roomsService : RoomsService){

  }
}
