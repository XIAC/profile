import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appDestacarpalabra]'
})
export class DestacarpalabraDirective {

  constructor(el: ElementRef, renderer: Renderer) {
      renderer.setElementStyle(el.nativeElement, 'fontSize', '50px');
      renderer.setElementStyle(el.nativeElement, 'color', 'red');
      renderer.setElementStyle(el.nativeElement, 'border', '2px solid red');

   }

}
