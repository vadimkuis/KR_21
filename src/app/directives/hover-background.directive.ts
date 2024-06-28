import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverBackground]'
})
export class HoverBackgroundDirective {
  @Input('defaultBg') defaultBackground: string = '#71081e';
  @Input('hoverBg') hoverBackground: string = '#d7485c';

  constructor(private el: ElementRef) {
    this.setTransition();
    this.setBackground(this.defaultBackground);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackground(this.hoverBackground);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackground(this.defaultBackground);
  }

  private setBackground(color: string) {
    this.el.nativeElement.style.setProperty('background', color);
  }

  private setTransition() {
    this.el.nativeElement.style.setProperty('transition', 'background 0.4s ease');
  }
}