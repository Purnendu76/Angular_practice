import { Component} from '@angular/core';
import { 
   FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reative',
  templateUrl: './reative.component.html',
  styleUrls: ['./reative.component.css']
})
export class ReativeComponent {
  data="";
  reactive=new FormGroup({
    user: new FormControl(''),
    gmail: new FormControl(''),
    pass: new FormControl(''),


  })
  login(){
   console.log(this.reactive.value);
    
   
  }


}
