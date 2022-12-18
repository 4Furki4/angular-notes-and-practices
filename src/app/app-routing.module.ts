import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'rooms', loadChildren: () => import('./rooms/rooms.module').then(m => m.RoomsModule), canActivate: [LoginGuard]},
  {path: 'word/add', loadChildren: () => import('./Word/word.module').then(m => m.WordModule)},
  {path: '', redirectTo: 'login', pathMatch: "full"},
  {path: 'login', component: LoginComponent},
  {path: 'employee', component: EmployeeComponent},

  {path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule), canActivate: [LoginGuard], canLoad: [LoginGuard] },
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule), canActivate: [LoginGuard] },
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
