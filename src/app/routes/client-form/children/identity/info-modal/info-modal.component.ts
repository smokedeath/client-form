import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component( {
    selector: 'info-modal',
    templateUrl: './info-modal.component.html'
} )

export class InfoModalComponent {
    @Input() show: boolean = false;
    @Output() close: EventEmitter<void>;
    
    constructor() {
        this.close = new EventEmitter<void>();
    }
}
