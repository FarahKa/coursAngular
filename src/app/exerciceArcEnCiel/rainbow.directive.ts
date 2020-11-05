import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  @HostBinding('style.borderColor') bc = 'black';
  @HostBinding('style.color') c = 'blue';
  constructor() { }
  generateRandomColor() : string {
    return '#'+Math.random().toString(16).substr(2,6);
  }

  @HostListener('keydown') onKeydown() {
    this.bc = this.generateRandomColor();
    this.c = this.generateRandomColor();
  }

}
