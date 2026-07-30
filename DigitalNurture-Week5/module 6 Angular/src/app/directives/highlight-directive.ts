import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private element: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = '#fff3cd';
    this.element.nativeElement.style.color = '#000';
    this.element.nativeElement.style.padding = '10px';
    this.element.nativeElement.style.borderRadius = '6px';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = 'transparent';
    this.element.nativeElement.style.color = '#000';
  }

}
