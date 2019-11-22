import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import  { RouterModule } from '@angular/router';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailComponent,
    ProductsComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
