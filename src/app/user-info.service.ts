import { Injectable } from '@angular/core';

@Injectable()
export class UserInfoService {

  
  currentUser: object;

  constructor() { }

  getUserInfo() {
    return this.currentUser 
  }
  setUserInfo(user: object) {
    this.currentUser = user
  }

}
