import { Component, OnInit } from '@angular/core';
import { StorageProvider } from '../../services/storage-provider';
import { Router } from '@angular/router';

@Component( {
    selector: 'client-form-app',
    templateUrl: './client-form.component.html'
} )

export class ClientFormComponent implements OnInit {
    constructor(
        private router: Router,
        private storageProvider: StorageProvider
    ) {
    }
    
    ngOnInit() {
        // const client = this.storageProvider.get( 'client' ) || null;
        // const address = this.storageProvider.get( 'address' ) || null;
        // const identity = this.storageProvider.get( 'identity' ) || null;
        // let result = 0;
        // if (client) { result += 1; }
        // if (address) { result += 10; }
        // if (identity) { result += 100; }
        //
        // switch (result) {
        //     case 1:
        //         this.router.navigate( [ 'client-form/address' ] );
        //         break;
        //     case 11:
        //         this.router.navigate( [ 'client-form/identity' ] );
        //         break;
        //     case 111:
        //         this.router.navigate( [ 'created-client' ] );
        //         break;
        //     default:
        //         this.router.navigate( [ 'client-form/client' ] );
        // }
    }
    
}
