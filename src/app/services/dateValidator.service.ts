import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable( {
    providedIn: 'root'
} )

export class DateValidator {
    
    constructor() {
    }
    
    static date(c: FormControl) {
        const dateRegEx = new RegExp( /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/ );
        const value = new Date( c.value ).getTime();
        const minDate = new Date( '1900-01-01' ).getTime();
        const maxDate = new Date( '2022-12-31' ).getTime();
        const range = minDate < value && value < maxDate;
        return dateRegEx.test( c.value ) && range ? null : { date: true }
    }
}
