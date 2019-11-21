import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  items=[];
  constructor() { }

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
}
