import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component( {
    selector: 'switcher',
    templateUrl: './switcher.component.html'
} )

export class SwitcherComponent {
    @Input() checked: boolean = false;
    @Output() change: EventEmitter<null>;
    
    constructor() {
        this.change = new EventEmitter<null>();
    }
}
