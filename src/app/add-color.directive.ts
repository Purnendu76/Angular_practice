import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAddColor]'
})
export class AddColorDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.color="blue"
  }

}
