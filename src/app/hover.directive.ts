import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hinvHover]'
})
export class HoverDirective implements OnInit {

  color : string = 'red';
  constructor(private element : ElementRef, private renderer : Renderer2) {
    console.log(this.element.nativeElement);
    
   }


  ngOnInit(): void {
    this.element.nativeElement.style.color = this.color;
    //or
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'black'
    );
  }

}
