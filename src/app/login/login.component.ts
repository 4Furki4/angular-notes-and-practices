import { Component } from '@angular/core';

@Component({
  selector: 'hinv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email!: string;
  password!: string;
  login() {
    console.log("login works");
    
    if(this.email === "Admin@gmail.com" && this.password === "Admin"){
      alert("login successful!");
    }
}



}
