import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login(user:any, pass:any){
    if(user=='nil@123'&& pass=='123'){
      localStorage.setItem("isLogedIn","true")
    }else{
      localStorage.setItem("isLogedIn","false")

    }

  }
}
