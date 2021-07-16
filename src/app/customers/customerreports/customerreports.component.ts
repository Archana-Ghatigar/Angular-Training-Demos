import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerreports',
  templateUrl: './customerreports.component.html',
  styleUrls: ['./customerreports.component.css']
})
export class CustomerreportsComponent implements OnInit {

  constructor() {
    console.log('customer report comp loaded');
  
   }

  ngOnInit(): void {
  }

}
