import {inject} from 'aurelia-framework';
import {UserApi} from 'resources/services/user-api';

@inject(UserApi)
export class Profile {
  constructor(userApi) {
    this._userApi = userApi;
    this.userData = [];

    this._userApi.getUserData()
      .then(userData => {
        this.userData = userData
      });

  }
}
