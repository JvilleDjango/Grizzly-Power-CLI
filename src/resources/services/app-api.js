import {appDefaults} from 'resources/services/app-api-data';
import moment from 'moment';
import {inject} from 'aurelia-framework';

export class AppApi {
  isRequesting = false;
  constructor() {

  }
  getAppData() {

    var promise = new Promise((resolve, reject) => {
      if (!this.appSettings) {
        setTimeout(_ => {
          this.appSettings = appDefaults;
          resolve(this.appSettings)
        }, 0);

      } else {
        resolve(this.appSettings)
      }
    });
    return promise;
  }
}
