import {inject} from 'aurelia-framework';
import {AppApi} from 'resources/services/app-api';
import {UserApi} from 'resources/services/user-api';

@inject(AppApi, UserApi)
export class Settings {
  constructor(appApi, userApi) {
    this._appApi = appApi;
    this.appData = [];

    this._userApi = userApi;
    this.userData = [];

    this.selectedUnit = null;

    this._appApi.getAppData()
      .then(appData => {
        this.appData = appData
      });

    this._userApi.getUserData()
      .then(userData => {
        this.userData = userData
      });

  }

}
