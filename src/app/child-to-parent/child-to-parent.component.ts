import { Component } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.css']
})
export class ChildToParentComponent {
  data='';
 addData(item:any){
  console.log(item);
  this.data=item;
  
 }

}
