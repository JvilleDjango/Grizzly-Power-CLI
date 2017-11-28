import {inject} from 'aurelia-framework';
import {UserApi} from 'resources/services/user-api';
import {computedFrom} from 'aurelia-framework';

@inject(UserApi)
export class Dashboard {
  heading = 'Grizzly Dashboard';
  constructor(userApi) {
    this._userApi = userApi;
    this.userData = [];
    this.total_weight = '';

    this._userApi.getUserData()
      .then(userData => {
        this.userData = userData
      });

  }

  attached() {

    //record total
    let recordTotals = this.userData[0].settings.records;

    var sum = Object.keys(recordTotals).reduce(function(prev, current, index) {
      return prev + (+recordTotals[current].weight);
    }, 0);

    this.total_weight = sum;

  }
}
