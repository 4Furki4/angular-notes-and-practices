import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WordComponent } from './Word/word.component';

const routes: Routes = [
  {path: 'employee', component: EmployeeComponent},
  {path: 'word/add', component: WordComponent},
  {path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },
  {path: '', redirectTo: 'login', pathMatch: "full"},
  {path: 'login', component: LoginComponent},
  {path: 'rooms', loadChildren: () => import('./rooms/rooms.module').then(m => m.RoomsModule)},
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
