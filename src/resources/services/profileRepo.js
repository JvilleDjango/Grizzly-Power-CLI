import {profileData} from 'resources/services/profileData';

export class ProfileRepo {
  constructor() {

  }
  getProfile() {
    var promise = new Promise((resolve, reject) => {
      if (!this.profile) {
        this.profile = profileData;
      }
      resolve(this.profile);
    });
    return promise;
  }
}
