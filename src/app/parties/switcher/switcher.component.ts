import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component( {
    selector: 'switcher',
    templateUrl: './switcher.component.html'
} )

export class SwitcherComponent {
    @Input() checked: boolean = false;
    @Output() change: EventEmitter<boolean>;
    
    constructor() {
        this.change = new EventEmitter<boolean>();
    }
}
