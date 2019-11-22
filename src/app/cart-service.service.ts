import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  items=[];
  constructor(private http:HttpClient) { }

  addItem(product){
console.log(product.name + " added");
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items=[];
    this.getItems();
  }

  getShippingPrices(){
    return this.http.get('./assets/shipping.json');
  }
}
