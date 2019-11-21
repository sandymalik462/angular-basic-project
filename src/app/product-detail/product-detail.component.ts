import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productList } from '../products';
import { CartServiceService } from '../cart-service.service';
 
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  product;
  constructor(private route:ActivatedRoute,
    private cartService: CartServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=> this.product = productList[params.get('productId')] );
  }

  addToCart(product){
window.alert('Your product has been added to cart');
this.cartService.addItem(product);
  }

}
