import { Component, OnInit } from '@angular/core';
import { StorageProvider } from '../../services/storage-provider';
import { Client } from '../../models/client';
import { Address } from '../../models/address';
import { Identity } from '../../models/identity';

@Component({
    selector: 'created-client-app',
    templateUrl: './created-client.component.html'
})

export class CreatedClientComponent implements OnInit {
    public client: Client;
    public address: Address;
    public identity: Identity;
    
    constructor(
        private storageProvider: StorageProvider
    ) {
    }

    public ngOnInit(): void {
        this.client = this.storageProvider.get('client') || null;
        this.address = this.storageProvider.get('address') || null;
        this.identity = this.storageProvider.get('identity') || null;
    }
}
