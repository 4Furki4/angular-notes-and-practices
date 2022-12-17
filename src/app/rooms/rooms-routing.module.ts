import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsComponent } from './rooms.component';
import { RoomsGuard } from './rooms.guard';

const routes: Routes = [
  {path: 'rooms', component: RoomsComponent,canActivateChild: [RoomsGuard], children:[
    {path: ':id', component: RoomsBookingComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
