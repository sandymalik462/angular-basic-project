import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products;
  checkoutForm;
  constructor(private cartService:CartServiceService,private formBuilder:FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name:'',
      address:''
    });
  
   }

  ngOnInit() {
    this.products=this.cartService.getItems();
  }

  onSubmit(custData){
    console.warn('You product has been submitted',custData);
    this.products=[];
    this.checkoutForm.reset();
  }
}
