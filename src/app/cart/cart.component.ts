import { CartService } from '../cart.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../productlist/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:Array<Product>;
  constructor(private cartservice:CartService) {
   }

  ngOnInit(): void {
    this.cartItems = this.cartservice.getItems();
  }

}
