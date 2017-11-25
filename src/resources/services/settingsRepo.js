import {settingsData, weight_units, assistance_exercise} from 'resources/services/settingsData';
import moment from 'moment';
import {inject} from 'aurelia-framework';
// import {HttpClient} from 'aurelia-http-client';
// import {HttpClient as HttpFetch} from 'aurelia-fetch-client';

export class SettingsRepo {
  constructor() {
    //this.settings = settingsData
  }

  getSettings() {
    var promise = new Promise((resolve, reject) => {
      if (!this.settings) {
        setTimeout(_ => {
          this.settings = settingsData;
          this.settings.forEach(item => {
            var dateTime = moment(item.dateTime)
              .format('MM/DD/YYYY HH:mm');
            item.dateTime = dateTime;
          })
          resolve(this.settings)
        }, 0);

      } else {
        resolve(this.settings)
      }
    });
    return promise;

  }

  getWeightUnit() {
    var promise = new Promise((resolve, reject) => {
      if (!this.units) {
        this.units = weight_units;
      }
      resolve(this.units);
    });
    return promise;

  }
  getAssistanceExercise() {
    var promise = new Promise((resolve, reject) => {
      if (!this.assistance_exercise) {
        this.assistance_exercise = assistance_exercise;
      }
      resolve(this.assistance_exercise);
    });
    return promise;
  }
}
