import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Selectors } from '../../models/selectors';

export const MAX_LENGTH = 20;

@Component( {
    selector: 'select-block',
    templateUrl: './select-block.component.html'
} )

export class SelectBlockComponent {
    @Input() data: Selectors[] = [];
    
    @Input() set current( value: Selectors ) {
        this.selectedItem = null;
        if ( value ) {
            this.selectedItem = { ...value };
        }
    }
    
    @Output() selected: EventEmitter<Selectors>
    public show: boolean = false;
    public selectedItem: Selectors;
    
    constructor() {
        this.selected = new EventEmitter<Selectors>();
    }
    
    public getName( item: Selectors ): string {
        if ( item ) {
            return item.value && item.value.length > MAX_LENGTH ? `${ item.value.substr( 0, MAX_LENGTH ) }...` : item.value;
        }
        return null;
    }
    
    public selectItem( item: Selectors ) {
        this.current = item;
        this.selected.emit( item );
    }
}
