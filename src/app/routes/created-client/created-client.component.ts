import { Component, OnInit } from '@angular/core';
import { StorageProvider } from '../../services/storage-provider';
import { Client } from '../../models/client';
import { Address } from '../../models/address';
import { Identity } from '../../models/identity';
import { Router } from '@angular/router';

@Component( {
    selector: 'created-client-app',
    templateUrl: './created-client.component.html'
} )

export class CreatedClientComponent implements OnInit {
    public client: Client;
    public address: Address;
    public identity: Identity;
    
    constructor(
        private router: Router,
        private storageProvider: StorageProvider
    ) {
    }
    
    public ngOnInit(): void {
        this.client = this.storageProvider.get( 'client' ) || null;
        this.address = this.storageProvider.get( 'address' ) || null;
        this.identity = this.storageProvider.get( 'identity' ) || null;
        if (this.client && this.address && this.identity) {
        } else {
            this.router.navigate( [ 'client-form' ] );
        }
    }
    
    public createNewClient() {
        this.storageProvider.delete( 'client' );
        this.storageProvider.delete( 'address' );
        this.storageProvider.delete( 'identity' );
        this.router.navigate( [ 'client-form/client' ] );
    }
}
