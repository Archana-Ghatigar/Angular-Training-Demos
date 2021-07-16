import { Component, OnInit } from '@angular/core';
import { Product } from '../productlist/product';
import { ProductsdataService } from '../productsdata.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  //providers:[ProductsdataService]
})
export class InventoryComponent implements OnInit {
  products:Array<Product>;
    constructor(private productsdataService:ProductsdataService) {

   }

  ngOnInit(): void {
    this.products = this.productsdataService.getProductList();
  }
  delete(id:number){
   this.productsdataService.deleteProduct(id);    
  }
  setPriceValue(newprice,id){
    this.productsdataService.setNewPrice(id,newprice);
  }
}
