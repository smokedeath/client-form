import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Selectors } from '../../models/selectors';

export const MAX_LENGTH = 20;

@Component( {
    selector: 'select-block-multi',
    templateUrl: './select-block-multi.component.html'
} )

export class SelectBlockMultiComponent {
    @Input() data: Selectors[] = [];
    @Input() selectedItems: Selectors[] = [];
    @Output() selected: EventEmitter<Selectors[]>
    public show: boolean = false;
    
    constructor() {
        this.selected = new EventEmitter<Selectors[]>();
    }
    
    public get getName(): string {
        if ( this.selectedItems && this.selectedItems.length > 0 ) {
            return this.selectedItems.length === 1 ? this.selectedItems[0].value : `Выбрано ${ this.selectedItems.length }`;
        }
        return 'Ничего не выбранно';
    }
    
    public selectItem( item: Selectors ) {
        event.stopPropagation();
        const idx = this.selectedItems.findIndex( i => i.id === item.id );
        if ( idx >= 0 ) {
            this.selectedItems.splice( idx, 1 );
        } else {
            this.selectedItems.push( item );
        }
        
        this.selected.emit( this.selectedItems );
    }
    
    public isSelected( item: Selectors ) {
        return this.selectedItems && this.selectedItems.length ? this.selectedItems.some( select => select.id === item.id ) : false;
    }
}
