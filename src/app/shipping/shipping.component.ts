import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCost;
  constructor(private cartService:CartServiceService) { }

  ngOnInit() {
    this.shippingCost = this.cartService.getShippingPrices();
  }


}
