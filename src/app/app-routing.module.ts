import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomsComponent } from './rooms/rooms.component';
import { WordComponent } from './Word/word.component';

const routes: Routes = [
  {path: 'employee', component: EmployeeComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'word/add', component: WordComponent},
  {path: '', redirectTo: 'rooms', pathMatch: "full"},
  {path: 'rooms/:id', component: RoomsBookingComponent},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
