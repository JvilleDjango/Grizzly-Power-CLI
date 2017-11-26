import {userData} from 'resources/services/user-api-data';
import moment from 'moment';
import {inject} from 'aurelia-framework';


export class UserApi {
  isRequesting = false;
  constructor() {}

  getUserData() {
    this.isRequesting = true;
    // return new Promise((resolve, reject) => {
    //   if (!this.userData) {
    //     setTimeout(() => {
    //       this.userData = userData;
    //       let results = this.userData.map(x => {
    //         return {
    //           id: x.id,
    //           userName: x.userName,
    //           fullName: x.fullName,
    //           email: x.email,
    //           phone: x.phone,
    //           profileImg: x.profileImg
    //         }
    //       });
    //       resolve(results);
    //       this.isRequesting = false;
    //     }, 200);
    //   } else {
    //     resolve(this.userData)
    //   }
    // });


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
