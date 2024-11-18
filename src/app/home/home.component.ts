import { Component } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items:any="";
  constructor(private myData:UserServiceService){
    localStorage.setItem("isLogedIn","false")

    myData.CallApi().subscribe((data)=>{
      console.log("data",data);
       this.items=data;
    })
  }

}
