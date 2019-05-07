import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CustomerRoutes } from './customer.routes';
import { ProfileDetailsComponent } from './profile-details.component';

@NgModule({

    declarations:[
        // CustomerLoginComponent,
        ProfileDetailsComponent,
    ],
    exports:[
        // CustomerLoginComponent,
        ProfileDetailsComponent,
        // CustomerSignUpComponent
    ],
    imports:[
        BrowserModule,
        RouterModule.forChild(CustomerRoutes),

    ],
    providers:[]
})
export class CustomerModule{

}