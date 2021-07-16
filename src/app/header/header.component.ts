import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username:string;
  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.auth.getUsername().subscribe(username=>{
      this.username = username;
    })
    //this.displayname = this.auth.getUsername();
  }

}
