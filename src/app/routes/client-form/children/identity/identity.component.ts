import { Component, OnInit } from '@angular/core';
import { BaseDestroy } from '../../../../services/base-destroy';
import { FormGroup } from '@angular/forms';

@Component( {
    selector: 'identity-app',
    templateUrl: './identity.component.html'
} )

export class IdentityComponent extends BaseDestroy implements OnInit {
    public form: FormGroup;
    
    constructor() {
        super();
    }
    
    public ngOnInit(): void {
    }
    
    
}
