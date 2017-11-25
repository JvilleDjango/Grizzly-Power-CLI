import {inject} from 'aurelia-framework';
import {ProfileRepo} from 'resources/services/profileRepo';

@inject(ProfileRepo)
export class Profile {
  constructor(profileRepo) {
    this._profileRepo = profileRepo;
    this.profile = [];

    this._profileRepo.getProfile()
    .then(profile =>{
      this.profile = profile;
    });
  }


}
