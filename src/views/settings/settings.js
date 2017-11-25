import {inject} from 'aurelia-framework';
import {SettingsRepo} from 'resources/services/settingsRepo';

@inject(SettingsRepo)
export class Settings {
  constructor(settingsRepo) {
    this._settingsRepo = settingsRepo;
    this.settings = [];
    this.units = [];
    this.assistance_exercise = [];
    this.selectedUnit = null;

    this._settingsRepo.getSettings()
      .then(settings => {
        this.settings = settings;
      });

    this._settingsRepo.getWeightUnit()
      .then(units => {
        this.units = units;
      });

    this._settingsRepo.getAssistanceExercise()
      .then(assistance_exercise => {
        this.assistance_exercise = assistance_exercise;
      });

  }
  activate() {

  }
}
