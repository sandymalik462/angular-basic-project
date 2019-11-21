import { Component, OnInit } from '@angular/core';
import { productList } from '../products'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 public products=productList;
  constructor() { }

  ngOnInit() {
  }
  share(product:any):void{
    window.alert(product.name + 'is shared');
  }
  onNotify(){
    window.alert('notified');
  }

}
