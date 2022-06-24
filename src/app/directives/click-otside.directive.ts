import { Directive, ElementRef, HostListener, Output, EventEmitter, Input } from '@angular/core';

@Directive({
    selector: '[clickOutside]'
})
export class ClickOutsideDirective {
    @Output() clickOutside: EventEmitter<any> = new EventEmitter();

    constructor(private _elementRef: ElementRef) { }

    @HostListener('document:click', ['$event.target']) onMouseEnter(targetElement) {
        if (!targetElement) {
            return;
        }
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);

        if (!clickedInside) {
            this.clickOutside.emit(targetElement);
        }
    }
}
