import { lineChartData } from 'resources/services/lineChartData';
export class LineChartRepo {
  constructor() {

  }

  getLineChartData() {
    var promise = new Promise((resolve, reject) => {
      if (!this.lineChart) {
        this.lineChart = lineChartData;
      }
      resolve(this.lineChart);
    });
    return promise;
  }
}
