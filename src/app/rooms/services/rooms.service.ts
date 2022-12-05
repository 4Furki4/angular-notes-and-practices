import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IAppconfig } from 'src/app/AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
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
  constructor(@Inject(APP_SERVICE_CONFIG) private config : IAppconfig, private http : HttpClient  ) {
    console.log("Room Service is just initialized ");
  }
  getRooms(){
    //return this.roomList;
    return this.http.get("https://localhost:5500/api/Dictionary/Words/sarih");
  }
}
