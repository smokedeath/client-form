import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BaseDestroy } from '../../../../services/base-destroy';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageProvider } from '../../../../services/storage-provider';
import { ClientService } from '../../../../services/client.service';
import { Selectors } from '../../../../models/selectors';
import { DateValidator } from '../../../../services/dateValidator.service';

@Component( {
    selector: 'identity-app',
    templateUrl: './identity.component.html'
} )

export class IdentityComponent extends BaseDestroy implements OnInit {
    @ViewChild( 'inputFile' ) inputFileRef: ElementRef;
    public form: FormGroup;
    public formData: FormData;
    public fileName: string;
    public showInfoModal: boolean = false;
    public documents: Selectors[] = [];
    
    constructor(
        private router: Router,
        private storageProvider: StorageProvider,
        private clientService: ClientService
    ) {
        super();
        this.createForm();
    }
    
    public ngOnInit(): void {
        this.clientService.getDocuments().pipe( this.unsubscribeOnDestroy ).subscribe( value => {
            this.documents = [];
            if ( value && value.length > 0 ) {
                this.documents = [ ...value ];
            }
        } );
        const oldForm = this.storageProvider.get( 'identity' );
        if ( oldForm ) {
            this.form.patchValue( oldForm );
        }
    }
    
    get fileExist(): boolean {
        return this.fileName && this.fileName.length > 0;
    }
    
    public createForm(): void {
        this.form = new FormGroup( {
            documentType: new FormControl( '', [ Validators.required ] ),
            serial: new FormControl( '', [] ),
            documentNumber: new FormControl( '', [ Validators.required ] ),
            whoIssued: new FormControl( '', [] ),
            issuedDate: new FormControl( null, [ Validators.required, DateValidator.date ] ),
            file: new FormControl( null, [] )
        } );
    }
    
    public onSelectFile() {
        if ( this.inputFileRef && this.inputFileRef.nativeElement && this.inputFileRef.nativeElement.files ) {
            const file = this.inputFileRef.nativeElement.files[0];
            if ( file ) {
                if ( file.size < 10000000 ) {
                    if ( this.formData ) {
                        this.formData = null;
                    }
                    this.formData = new FormData();
                    this.formData.append( 'runoverFile', file, file.name );
                    this.fileName = file.name;
                    this.form.patchValue( { file: this.formData } );
                } else {
                    this.deleteFile();
                    alert( 'Размер файла не должен привышать 10мб' );
                }
            } else {
                this.fileName = '';
            }
        }
    }
    
    public selectFile(): void {
        if ( this.inputFileRef ) {
            this.inputFileRef.nativeElement.click();
        }
    }
    
    public deleteFile() {
        event.stopPropagation();
        this.fileName = '';
        this.formData = null;
        if ( this.inputFileRef && this.inputFileRef.nativeElement && this.inputFileRef.nativeElement.files ) {
            this.inputFileRef.nativeElement.value = null;
        }
    }
    
    public onNextClick(): void {
        if ( this.form.valid ) {
            this.storageProvider.set( 'identity', this.form.value );
            this.showInfoModal = true;
        }
    }
    
    public onModalClose() {
        this.showInfoModal = false;
        this.router.navigate( [ 'created-client' ] );
    }
    
}
