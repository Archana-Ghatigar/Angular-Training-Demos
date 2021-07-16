import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userservice:UserService) { }

  ngOnInit(): void {
  }
  postForm(form:any){
    this.userservice.addUser(form).subscribe(response=>{
      alert('Form posted');
    })    
  }
}
