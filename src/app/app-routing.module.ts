import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { productList } from './products';


const routes: Routes = [{path:'',redirectTo:'productList' , pathMatch:'full'},
{path:'productList',component:ProductListComponent},
{path:'products/:productId',component:ProductDetailComponent},
{path:'checkout',component:CartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
