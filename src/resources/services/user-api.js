import {userData} from 'resources/services/user-api-data';
import moment from 'moment';
import {inject} from 'aurelia-framework';


export class UserApi {
  isRequesting = false;
  constructor() {}

  getUserData() {
    this.isRequesting = true;

    var promise = new Promise((resolve, reject) => {
      if (!this.userData) {
        setTimeout(_ => {
          this.userData = userData;
          resolve(this.userData)
        }, 0);

      } else {
        resolve(this.userData)
      }
    });
    return promise;
  }
}
