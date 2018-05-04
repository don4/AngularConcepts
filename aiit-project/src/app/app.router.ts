import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';
import {ProductsComponent} from './products/products.component';
import {ContactusComponent} from './contactus/contactus.component';
import { ModuleWithComponentFactories } from '@angular/core/src/linker/compiler';

export const router: Routes =[
    {path:'', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'services', component: ServicesComponent},
    {path:'products', component: ProductsComponent},
    {path:'contactus', component: ContactusComponent}
];
 export const routes : ModuleWithProviders = RouterModule.forRoot(router);

