import { UserService } from '../../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {tap,flatMap} from 'rxjs/operators';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  userid: number;
  userList: Array<any>;
  user: any;
  constructor(private activeRoute: ActivatedRoute, private userservice: UserService) {

  }

  ngOnInit() {
    this.userList = this.userservice.getList();
    this.activeRoute.paramMap.subscribe(routeParams=>{
    this.userid = parseInt(routeParams.get('id'))
    this.user = this.getUser(parseInt(routeParams.get('id')));
      
  })
    //Making a separate Http request for user details
    //Nested Observables 
    /*this.activeRoute.paramMap
    .pipe(flatMap(routeparams=>this.userservice.getUserDetails(parseInt(routeparams.get('id')))))
    .subscribe(userobj=>this.user=userobj);
  }*/
}
  getUser(id: number) {
    let userObj: any;
    userObj = this.userList.find(user => user.id === id);
    return userObj;
  }
}
