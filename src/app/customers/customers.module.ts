import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerreportsComponent } from './customerreports/customerreports.component';


@NgModule({
  declarations: [CustomerlistComponent, CustomerreportsComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  exports:[CustomerlistComponent]
})
export class CustomersModule { 
  constructor(){
    console.log('customer modules loaded');
  }
}
