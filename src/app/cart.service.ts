import { Injectable } from '@angular/core';
import { Product } from './productlist/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems:Array<Product>;
  constructor() { 
    this.cartItems = new Array<Product>();
  }
  addItem(item:Product){
    this.cartItems.push(item);
  }
  getItems(){
    return this.cartItems;
  }
}
