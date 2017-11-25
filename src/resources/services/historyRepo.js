import { historyData } from 'resources/services/historyData';

export class HistoryRepo {
  constructor() {

  }

  getHistory(){
    var promise = new Promise((resolve, reject) => {
      if (!this.history) {
        this.history = historyData;
      }
      resolve(this.history);
    });
    return promise;
  }
}
