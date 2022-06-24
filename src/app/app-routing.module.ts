import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './routes/client-form/client-form.component';
import { CreatedClientComponent } from './routes/created-client/created-client.component';
import { ClientComponent } from './routes/client-form/children/client/client.component';

const routes: Routes = [
    { path: '', redirectTo: '/client-form', pathMatch: 'full' },
    {
        path: 'client-form', component: ClientFormComponent, children: [
            { path: 'client', component: ClientComponent }
        ]
    },
    { path: 'create-client', component: CreatedClientComponent }
];

@NgModule( {
    imports: [ RouterModule.forRoot( routes ) ],
    exports: [ RouterModule ]
} )
export class AppRoutingModule {
}
