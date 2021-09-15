import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appFocusTrap]',
})
export class FocusTrapDirective implements AfterViewInit {
  private firstFocusAbleElement: HTMLElement = null;
  private lastFocusAbleElement: HTMLElement = null;

  constructor(private elementRef: ElementRef<any>) {}

  ngAfterViewInit(): void {
    const focusableElements = this.elementRef.nativeElement.querySelectorAll(`
        [tabindex]:not([tabindex="-1"]),
        a[href]:not([disabled]),
        button:not([disabled]),
        textarea:not([disabled]),
        input:not([disabled]),
        select:not([disabled])`) as Array<HTMLElement>;
    this.firstFocusAbleElement = focusableElements[0];
    this.lastFocusAbleElement = focusableElements[focusableElements.length - 1];
    this.firstFocusAbleElement.focus();
  }
  @HostListener('keydown', ['$event'])
  manageTab(event: KeyboardEvent) {
    if (event.key !== 'Tab') {
      return;
    }
    if (
      event.shiftKey &&
      document.activeElement === this.firstFocusAbleElement
    ) {
      this.lastFocusAbleElement.focus();
      event.preventDefault();
    } else if (document.activeElement === this.lastFocusAbleElement) {
      this.firstFocusAbleElement.focus();
      event.preventDefault();
    }
  }
}
