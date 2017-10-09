import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    constructor(private elRef: ElementRef) { }

    @HostListener('click') toggleOpen(eventData: Event) {
        const control = this.elRef.nativeElement;
        if (control.classList.contains('open')) {
           control.classList.remove('open');
        } else {
            control.classList.add('open');
        }
    }
}
