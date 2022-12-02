import { Injectable } from '@angular/core';
import { IRoomList } from '../IRoom';
@Injectable()
export class RoomsService {

  roomList : IRoomList[]= [
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
  constructor() {
    console.log("Room Service is just initialized ");
    
   }

  getRooms(){
    return this.roomList;
  }
}
