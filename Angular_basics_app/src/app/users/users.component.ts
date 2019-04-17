import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { 
    setTimeout(() => {
      this.allowNewUser = true;
    }, 2000);
    
  }

  ngOnInit() {
  }

// parameters of Users component

  allowNewUser = false;
  username = "";
  userNameCreated = false;
  usernameCreationStatus = "no new user has been added"
  
  // users array with test data
  users =['testuser1','testuser2'];


// methods of Users component

  getUserNameStatus = function () {
    return this.serverstatus;
  }

  createUserButton= function(){
    console.log('Bazinga');
;    this.userNameCreated = true;
    this.users.push(this.username);
    this.usernameCreationStatus = 'New user of name:'+ this.username +' has been added! Name is ';
    // this.username = "";
  }

 
}
