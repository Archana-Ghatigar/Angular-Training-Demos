import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: string[];
  constructor() {
    this.menuItems = ["Home","Login","Products","Inventory","Users","Signup","Reports","About"];
  }
  ngOnInit() {
  }

}
