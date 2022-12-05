import { AfterViewInit, Component, Inject, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IAppconfig } from '../AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { HeaderComponent } from '../header/header.component';
import { localstorage } from '../javascript.api.token';
import { IRoom, IRoomList } from './IRoom';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, AfterViewInit, OnDestroy {
  roomList : IRoomList[] = []
  // @ViewChildren(HeaderComponent) headerComponent! : QueryList<HeaderComponent>;
  ngAfterViewInit(): void {
    // console.log(this.headerComponent);
  }
  ngOnInit(): void {
    // console.log(this.headerComponent)
    this.roomService.getRooms().subscribe(data => console.log(data));
    
    localStorage.setItem('name', 'Furkan')
  }
  constructor(private roomService : RoomsService ){
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy was called.");
    
  }
  numberOfRooms : number = 10;
  hideRooms : boolean = true;
  public rooms : IRoom = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms:20
  };

  
  toggle() : void {
    this.hideRooms = !this.hideRooms;
  }
  hotelName : string = "Hilton Hotel";

  selectRoom(room:IRoomList){
    console.log(room);
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

  

}
