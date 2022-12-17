import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsComponent } from './rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RouteConfigToken } from '../AppConfig/routeConfig.service';


@NgModule({
  declarations: [
    RoomsBookingComponent,
    RoomsComponent,
    RoomsListComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
  ],
  providers: [
    {
      provide: RouteConfigToken,
      useValue: {title : 'Rooms'}
    }
  ]
})
export class RoomsModule { }
