import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-priceupdater',
  templateUrl: './priceupdater.component.html',
  styleUrls: ['./priceupdater.component.css']
})
export class PriceupdaterComponent implements OnInit {
  @Input()
  pricevalue:number;
  
  @Output()
  update:EventEmitter<number>;
  constructor() {
    this.update = new EventEmitter<number>();
   }

  ngOnInit() {
  }
  updatePrice():void{
    this.update.emit(this.pricevalue);
  }
}
