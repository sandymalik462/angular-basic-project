import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products;
  cartService:CartServiceService;
  constructor(cartService:CartServiceService) {
    this.cartService=cartService;
   }

  ngOnInit() {
    this.products=this.cartService.getItems();
  }

}
