import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../User';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  userList: Array<User>;
     
    //Inject the dependencies in the constructor 
    constructor(private userservice:UserService){            
    }
    ngOnInit() {
      //this.userList = this.userservice.getList();
         this.userservice.getUserList().subscribe(data=>{
            this.userList = data;
        },error=>console.log(error)); //error handling 
        
        /*this.userservice.getUserListAsPromise().then(data=>{
            this.userList = data;
        });*/
        
    }
    /*remove(index: number): void {
        this.userservice.remove(index);
    }*/
	
}
