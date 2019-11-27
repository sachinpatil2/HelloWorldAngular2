import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[boldHover]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})

export class BoldHoverDirective {
  private element: HTMLElement;

  constructor(elementRef: ElementRef){
    this.element = elementRef.nativeElement;
  }

  onMouseEnter(){
    console.log("onMouseEnter");
    this.element.style.fontWeight = 'bold';
  }

  onMouseLeave(){
    this.element.style.fontWeight = 'normal';
  }
}
