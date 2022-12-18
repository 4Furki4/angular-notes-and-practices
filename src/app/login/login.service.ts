import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  IsLoggedIn : boolean = false;
  constructor(private router : Router) { }

  Login(email : string, password : string) : boolean {
    if(email === "Admin@gmail.com" && password === "Admin"){
      alert("login successful!, redirecting to word add page...");
      setTimeout(() => {
      this.router.navigateByUrl('/word/add');
      },1000)
      this.IsLoggedIn = true;
    }
    return this.IsLoggedIn;
  }
}
