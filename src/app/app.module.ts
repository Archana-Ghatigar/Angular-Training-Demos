import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MenuComponent } from './menu/menu.component';
import { BigBasketDataService } from './BigBasketDataService';
import { AmazonDataService } from './AmazonData.service';
import { ProductsdataService } from './productsdata.service';
import { ProductlistComponent } from './productlist/productlist.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceupdaterComponent } from './priceupdater/priceupdater.component';
import {InventoryComponent} from './inventory/inventory.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { UserlistComponent } from './userlist/userlist.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomersModule } from './customers/customers.module';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';
import { UserResolver } from './userResolver.guard';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    PriceupdaterComponent,
    InventoryComponent,
    ProductlistComponent,
    CartComponent,
    MenuComponent, 
    UserlistComponent,
    PagenotfoundComponent,
    LoginComponent,
    TestComponent,
    HeaderComponent,
    RegistrationComponent,
    LogoutComponent,
    SignupComponent    
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule,HttpClientModule,
    CustomersModule,ReactiveFormsModule
  ],
  providers: [{provide:ProductsdataService,useClass:BigBasketDataService}],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log('App modules loaded');
  }
}
