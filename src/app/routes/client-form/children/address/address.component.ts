import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Selectors } from '../../../../models/selectors';
import { BaseDestroy } from '../../../../services/base-destroy';
import { Router } from '@angular/router';
import { StorageProvider } from '../../../../services/storage-provider';
import { ClientService } from '../../../../services/client.service';

@Component( {
    selector: 'address-app',
    templateUrl: './address.component.html'
} )

export class AddressComponent extends BaseDestroy implements OnInit {
    public form: FormGroup;
    public countries: Selectors[] = [];
    public cities: Selectors[] = [ { id: '0', value: 'Выберите страну' } ];
    
    constructor(
        private router: Router,
        private storageProvider: StorageProvider,
        private clientService: ClientService
    ) {
        super();
        this.createForm();
    }
    
    public ngOnInit(): void {
        const client = this.storageProvider.get( 'client' ) || null;
        if ( client ) {
            this.clientService.getCountries().pipe( this.unsubscribeOnDestroy ).subscribe( value => {
                this.countries = [];
                if ( value && value.length > 0 ) {
                    this.countries = [ ...value ];
                }
            } );
            const oldForm = this.storageProvider.get( 'address' );
            if ( oldForm ) {
                this.form.patchValue( oldForm );
            }
        } else {
            this.router.navigate( [ 'client-form/client' ] );
        }
    }
    
    public selectCountry( item: Selectors ) {
        this.form.patchValue( { 'city': null } );
        if ( item && item.id ) {
            this.form.patchValue( { 'country': item } );
            this.cities = [];
            this.clientService.getCities( item.id ).pipe( this.unsubscribeOnDestroy ).subscribe( value => {
                if ( value && value.length > 0 ) {
                    this.cities = [ ...value ];
                }
            } );
        }
    }
    
    public createForm(): void {
        this.form = new FormGroup( {
            addressIndex: new FormControl( '', [] ),
            country: new FormControl( null, [ Validators.required ] ),
            region: new FormControl( '', [] ),
            city: new FormControl( null, [ Validators.required ] ),
            streetName: new FormControl( '', [] ),
            building: new FormControl( '', [] )
        } );
    }
    
    public onNextClick(): void {
        if ( this.form.valid ) {
            this.storageProvider.set( 'address', this.form.value );
            this.router.navigate( [ 'client-form/identity' ] );
        }
    }
}
