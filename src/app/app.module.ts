import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as fromComponents from './routes/client-form/index';
import * as fromParties from './parties/index';
import * as fromDirectives from './directives/index';
import { CreatedClientComponent } from './routes/created-client/created-client.component';

@NgModule( {
    declarations: [
        AppComponent,
        CreatedClientComponent,
        ...fromComponents.components,
        ...fromParties.parties,
        ...fromDirectives.directives
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        CommonModule,
        RouterModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
} )
export class AppModule {
}
