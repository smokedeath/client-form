import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component( {
    selector: 'client-form-app',
    templateUrl: './client-form.component.html'
} )

export class ClientFormComponent implements OnInit {
    constructor(
        private router: Router
    ) {
        router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        )
        .subscribe(event => {
            if (event['urlAfterRedirects'] === 'client-form/client' || event['urlAfterRedirects'] === '/client-form') {
                this.router.navigate( [ 'client-form/client' ]);
            }
        });
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
