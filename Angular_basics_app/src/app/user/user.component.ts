import {Component, OnInit } from '@angular/core';

@Component({
    selector: `app-user`,
    templateUrl: `./user.component.html`,
    styles: [`
    .online {
      color: white;
    }`]
})

export class UserComponent implements OnInit{

    costructor(){}

  ngOnInit(){}


  userId= 1;
  UserStatus= 'offline';

  constructor() {
    this.UserStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getUserStatus() {
    return this.UserStatus;
  }

  getColor() {
    return this.UserStatus === 'online' ? 'green' : 'red';
  }
}