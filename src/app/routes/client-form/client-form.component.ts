import { Component, OnInit } from '@angular/core';
import { StorageProvider } from '../../services/storage-provider';
import { Router } from '@angular/router';

@Component({
    selector: 'client-form-app',
    templateUrl: './client-form.component.html'
})

export class ClientFormComponent implements OnInit {
    constructor(
        private router: Router,
        private storageProvider: StorageProvider
    ) {
    }
    
    ngOnInit() {
        this.router.navigate(['client-form/client']);
    }
    
}
