import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title : string = "header"
  ngOnInit(): void {
    
  }
  constructor(private roomsService : RoomsService) {
    if(roomsService)
    {
      console.log("roomsService exists");
      
    }
  }
  
}
