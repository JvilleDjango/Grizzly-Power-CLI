import {inject} from 'aurelia-framework';
import {HistoryRepo} from 'resources/services/historyRepo';

@inject(HistoryRepo)
export class History {
  constructor(historyRepo) {
    this._historyRepo = historyRepo;
    this.history = [];

    this._historyRepo.getHistory()
      .then(history => {
        this.history = history;
      });

  }
}
