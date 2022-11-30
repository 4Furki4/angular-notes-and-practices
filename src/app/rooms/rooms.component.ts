import { AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { IRoom, IRoomList } from './IRoom';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, AfterViewInit, DoCheck {
  
  @ViewChild(HeaderComponent) headerComponent! : HeaderComponent;
  
  ngOnInit(): void {
    console.log(this.headerComponent)
    this.roomList = [
    {
      roomType: "Deluxe Room",
      amenities: "Air conditioner",
      price: 1200,
      photos: "https://picsum.photos/200/300",
      checkinTime: new Date(2022,11,29),
      checkoutTime: new Date(2022,12,29),
      rating: 3.225
    },
    {
      roomType: "Ultra Deluxe Room",
      amenities: "Air conditioner, Free mini bar",
      price: 1800,
      photos: "https://picsum.photos/300/300",
      checkinTime: new Date(2022,11,29),
      checkoutTime: new Date(2022,12,29),
      rating: 4.412
    },
    {
      roomType: "Ultra Premium VIP Deluxe Room",
      amenities: "Air conditioner, Free mini bar, jacuzzi",
      price: 200000,
      photos: "https://picsum.photos/200/300",
      checkinTime: new Date(2022,11,29),
      checkoutTime: new Date(2022,12,29),
      rating: 4.1234
    }
  ]
  }
  constructor(){

  }
  ngDoCheck(): void {

  }

  numberOfRooms : number = 10;
  hideRooms : boolean = true;
  public rooms : IRoom = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms:20
  };

  roomList : IRoomList[] = []
  toggle() : void {
    this.title = "Room List Changed";
  }
  hotelName : string = "Hilton Hotel";

  selectRoom(room:IRoomList){
    console.log(room);
    console.log(this.headerComponent);
  }

  title! : string;

  addRoom(){
    const room : IRoomList = {
      roomType: "Ultra Premium VIP Deluxe Room",
      amenities: "Air conditioner, Free mini bar, internet and TV",
      price: 22500,
      photos: "https://picsum.photos/200/300",
      checkinTime: new Date(2022,11,29),
      checkoutTime: new Date(2023,1,29),
      rating: 3.31
    }
    this.roomList = [...this.roomList, room];
  }

  ngAfterViewInit(): void {

    console.log(this.headerComponent.title);
    this.headerComponent.title = "changed in ngafter"
    console.log(this.headerComponent.title);
  }

}
