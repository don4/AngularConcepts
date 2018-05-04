import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AiitServices} from './home/app.services'

import {routes} from './app.router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { ContactusComponent } from './contactus/contactus.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ProductsComponent,
    ContactusComponent    
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [AiitServices],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
