import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InventoryComponent } from './inventory/inventory.component';
import { UserdetailsComponent } from './userlist/userdetails/userdetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserlistComponent } from './userlist/userlist.component';
import { CartComponent } from './cart/cart.component';
import { CustomerlistComponent } from './customers/customerlist/customerlist.component';
import { TestComponent } from './test/test.component';
import {UserResolver} from './userResolver.guard'
const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'products',
    component:ProductlistComponent
  },
  {
    path:'inventory',
    component:InventoryComponent
  },
  {
    path:'customers',
    //component:CustomerlistComponent
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path:'users',
    component:UserlistComponent,
    children:[
      {
        path:'userdetails/:id',
        component:UserdetailsComponent
      }      
    ]
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'reg',
    component:RegistrationComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path:'**',
    component:PagenotfoundComponent
  }       
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
