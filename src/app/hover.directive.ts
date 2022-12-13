import { Directive, ElementRef, Host, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hinvHover]'
})
export class HoverDirective implements OnInit {

  color : string = 'red';
  constructor(private element : ElementRef, private renderer : Renderer2) {
    console.log(this.element.nativeElement);
    
   }
  @Input() bgColor !: string | undefined;
   setBacgroundColor(color : string){
      this.renderer.setStyle(
        this.element.nativeElement,
        'backgroundColor',
        color
      );
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
  // @HostListener('mouseleave') mouseLeave(){
  //   this.setBacgroundColor('black');
  // }
  @HostListener('mouseenter') mouseEnterEvent(eventData : Event){
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.bgColor
    );
  }
  @HostListener('mouseleave') mouseLeaveEvent(eventData : Event){
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'black'
    );
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if(event.key === 'Enter'){
      this.setBacgroundColor('green');
    }
  }
}
