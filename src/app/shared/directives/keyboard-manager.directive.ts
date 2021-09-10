import { KeyboardManagerItemDirective } from './keyboard-manager-item.directive';
import {
  ContentChildren,
  Directive,
  HostListener,
  QueryList,
} from '@angular/core';

@Directive({
  selector: '[appKeyboardManager]',
})
export class KeyboardManagerDirective {
  constructor() {}
  @ContentChildren(KeyboardManagerItemDirective)
  public items: QueryList<KeyboardManagerItemDirective>;
  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        console.log('up');
        this.moveFocus(ArrowDirection.RIGT).focus();
        break;
      case 'ArrowDown':
        this.moveFocus(ArrowDirection.LEFT).focus();
        console.log('down');
        break;
      case 'ArrowLeft':
        console.log('left');
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;
      case 'ArrowRight':
        this.moveFocus(ArrowDirection.RIGT).focus();
        console.log('right');
        break;
    }
  }

  public moveFocus(direction: ArrowDirection): KeyboardManagerItemDirective {
    const items = this.items.toArray();
    const curentSelectedIndex = items.findIndex((item) => item.isFocused());
    const targetElementFocus = items[curentSelectedIndex + direction];
    if (targetElementFocus) {
      return targetElementFocus;
    }
    return direction === ArrowDirection.LEFT
      ? items[items.length - 1]
      : items[0];
  }
}

enum ArrowDirection {
  LEFT = -1,
  RIGT = 1,
}
