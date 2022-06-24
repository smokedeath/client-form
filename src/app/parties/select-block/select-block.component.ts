import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ResponseDomainResponse } from '../../../api/models/response-domain-response';

export const MAX_LENGTH = 20;

@Component( {
    selector: 'select-block',
    templateUrl: './select-block.component.html'
} )

export class SelectBlockComponent {
    @Input() data: ResponseDomainResponse[] = [];
    
    @Input() set current( value: ResponseDomainResponse ) {
        this.selectedItem = null;
        if ( value ) {
            this.selectedItem = { ...value };
        }
    }
    
    @Output() selected: EventEmitter<ResponseDomainResponse>
    public show: boolean = false;
    public selectedItem: ResponseDomainResponse;
    
    constructor() {
        this.selected = new EventEmitter<ResponseDomainResponse>();
    }
    
    public getName( item: ResponseDomainResponse ): string {
        if ( item ) {
            const name = item.external_name || item.name;
            return name && name.length > MAX_LENGTH ? `${ name.substr( 0, MAX_LENGTH ) }...` : name;
        }
        return null;
    }
    
    public selectItem( item: ResponseDomainResponse ) {
        this.current = item;
        this.selected.emit( item );
    }
}
