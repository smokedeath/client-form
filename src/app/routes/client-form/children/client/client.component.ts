import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Selectors } from '../../../../models/selectors';
import { ClientService } from '../../../../services/client.service';
import { StorageProvider } from '../../../../services/storage-provider';
import { Router } from '@angular/router';
import { BaseDestroy } from '../../../../services/base-destroy';

@Component( {
    selector: 'client-app',
    templateUrl: './client.component.html'
} )

export class ClientComponent extends BaseDestroy implements OnInit {
    public form: FormGroup;
    public coordinator: Selectors[] = [];
    public sex: Selectors[] = [];
    public clientsGroup: Selectors[] = [];
    
    constructor(
        private router: Router,
        private storageProvider: StorageProvider,
        private clientService: ClientService
    ) {
        super();
        this.createForm();
        this.coordinator = [];
    }
    
    public ngOnInit(): void {
        this.clientService.getCoordinators().pipe( this.unsubscribeOnDestroy ).subscribe( value => {
            this.coordinator = [];
            if ( value && value.length > 0 ) {
                this.coordinator.push( { id: '0', value: 'Ничего не выбрано' } );
                value.forEach( item => this.coordinator.push( item ) );
            }
        } );
        this.clientService.getSex().pipe( this.unsubscribeOnDestroy ).subscribe( value => {
            this.sex = [];
            if ( value && value.length > 0 ) {
                this.sex = [ ...value ];
            }
        } );
        this.clientService.getClientsGroup().pipe( this.unsubscribeOnDestroy ).subscribe( value => {
            this.clientsGroup = [];
            if ( value && value.length > 0 ) {
                this.clientsGroup = [ ...value ];
            }
        } );
        const oldForm = this.storageProvider.get( 'client' );
        if ( oldForm ) {
            this.form.patchValue( oldForm );
        }
    }
    
    public createForm(): void {
        this.form = new FormGroup( {
            firstName: new FormControl( '', [ Validators.required ] ),
            lastName: new FormControl( '', [ Validators.required ] ),
            secondName: new FormControl( '' ),
            birthDay: new FormControl( null, [ Validators.required, this.dateValidator ] ),
            phone: new FormControl( '', [ Validators.required, Validators.pattern( '[0-9]{11}' ) ] ),
            sex: new FormControl( '', [] ),
            clientsGroup: new FormControl( [], [ Validators.required ] ),
            coordinator: new FormControl( null, [] ),
            dontSentSms: new FormControl( true, [] )
        } );
    }
    
    public dateValidator( c: FormControl ) {
        const dateRegEx = new RegExp( /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/ );
        const value = new Date( c.value ).getTime();
        const minDate = new Date( '1900-01-01' ).getTime();
        const maxDate = new Date( '2022-12-31' ).getTime();
        const range = minDate < value && value < maxDate;
        return dateRegEx.test( c.value ) && range ? null : { date: true }
    }
    
    public onNextClick(): void {
        if ( this.form.valid ) {
            this.storageProvider.set( 'client', this.form.value );
            this.router.navigate( [ 'client-form/address' ] );
        }
    }
}
