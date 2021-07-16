import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';
import { Product } from './productlist/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsdataService {
  productList = new Array<Product>();
  constructor() { 
    /*let p1 = new Product(1, "MotoG4", "Mobiles", 24000, "assets/images/1.jpg");
    let p2 = new Product(2, "SonyDSC", "Camera", 64000, "assets/images/2.jpg");
    let p3 = new Product(3, "Lenovo110", "Laptops", 54000, "assets/images/3.jpg");
    let p4 = new Product(4, "Xiomi55", "Mobiles", 14000, "assets/images/4.jpg");
    let p5 = new Product(5, "Samsung Galaxy", "Mobiles", 44000, "assets/images/5.jpg");
    this.productList.push(p1);
    this.productList.push(p2);
    this.productList.push(p3);
    this.productList.push(p4);
    this.productList.push(p5);*/
    //this.logger.log('Initialized products data');
  }
  getProductList():Array<Product>{
    return this.productList;
  }
  deleteProduct(id:number){
    for(var i=0;i<this.productList.length;i++){
      if(this.productList[i].id==id)
        this.productList.splice(i,1);
    }
  }
  setNewPrice(id:number,newprice){
    let p = this.findProductById(id);
    p.setPrice(newprice);
  }
  findProductById(id:number):Product{
    for(let p of this.productList){
      if(p.getId()==id)
        return p;
    }
  }
}
