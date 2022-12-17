import { Component, ElementRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'hinv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router : Router, private configService : ConfigService){

  }
  bgColor : string = "#7b1fa2";
  email!: string;
  password!: string;
  login() {
    console.log("login works");
    
    if(this.email === "Admin@gmail.com" && this.password === "Admin"){
      alert("login successful!, redirecting to word add page...");
      setTimeout(() => {
      this.router.navigateByUrl('/word/add');
      },1000)
    }
}
  emailYazdir(ref : NgModel){
    console.log(ref);
    
  }
  colorList = [
    {id: 1, color: 'red'},
    {id: 2, color: 'blue'},
    {id: 3, color: 'green'},
    {id: 4, color: 'purple'},
    {id: 5, color: '#7b1fa2'},
  ]
}
