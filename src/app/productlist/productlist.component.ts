import { CartService } from '../cart.service';
import { ProductsdataService } from '../productsdata.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  productList:Array<Product>;
  searchkey:string;
  isLoggedIn:boolean=true;
  constructor(private productsdataService:ProductsdataService,private cart:CartService) {
	/*
	this.productList = new Array<Product>();
    let p1 = new Product(1, "Angular CookBook", "Technical", 240, "assets/images/angular.jpg");
    let p2 = new Product(2, "Ajax for Dummies", "Technical", 640, "assets/images/ajax.jpg");
    let p3 = new Product(3, "Life Rules", "Self help", 540, "assets/images/liferules.jpg");
    let p4 = new Product(4, "Tinkle", "Comic", 140, "assets/images/tinkle.jpg");
    let p5 = new Product(5, "You can Win", "Self help", 440, "assets/images/youcanwin.jpg");
    this.productList.push(p1);
    this.productList.push(p2);
    this.productList.push(p3);
    this.productList.push(p4);
    this.productList.push(p5);  */
   }

  ngOnInit(): void {
    this.productList = this.productsdataService.getProductList();
  }
  addToCart(product:Product){
    this.cart.addItem(product);
    /*for(var i=0;i<this.products.length;i++){
      let product = this.products[i];
      if(product.id==productId)
        this.cart.addItem(product);
    }*/
    
  }

}
