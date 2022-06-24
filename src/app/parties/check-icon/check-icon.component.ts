import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component( {
    selector: 'check-icon',
    templateUrl: './check-icon.component.html'
} )

export class CheckIconComponent {
    @Input() checked: boolean = false;
    @Output() change: EventEmitter<boolean>;
    
    constructor() {
        this.change = new EventEmitter<boolean>();
    }
    
    onChange(): void {
        this.checked = !this.checked;
        this.change.emit(this.checked);
    }
}
