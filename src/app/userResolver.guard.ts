import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from './User';

import { Observable } from 'rxjs';
import { UserService } from './user.service';
;

@Injectable()
export class UserResolver implements Resolve<User> {
    private userList: Array<User>;
  
    constructor(private userservice:UserService) { }
    resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): User{
        let id = parseInt(route.paramMap.get('id'));
        //console.log('route name'+name);
        /*this.userservice.getUserListAsPromise().then(list=>{
            this.userList = list;
            console.log('got data');
            this.getUser(id).then(obj=>{
                return obj;
            });

        })*/
        
        return null;

    }
    getUser(id:number):Promise<User> {
        //Loop to iterate and fetch the userObject
        //this.getUserListAsPromise();
        
          let userObj: User;
          return new Promise(function(resolve,reject){
            userObj = this.userList.find(user=>user.id===id);
            resolve(userObj);
          });  
    }
      
}