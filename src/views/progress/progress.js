import {bindable} from 'aurelia-framework';

import {inject} from 'aurelia-framework';
import {LineChartRepo} from 'resources/services/lineChartRepo';

@inject(LineChartRepo)
export class Progress {
  constructor(lineChartRepo) {
    this._lineChartRepo = lineChartRepo;

    this.chartData = {};
    this.chartOps = {};
    this._colorList = ['#3366CC', '#DC3912', '#FF9900', '#109618', '#990099', '#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E', '#316395', '#994499', '#22AA99', '#AAAA11', '#6633CC', '#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC'];

    this._lineChartRepo.getLineChartData()
      .then(lineChart => {
        this.lineChart = lineChart;
      });

  }

  //
  //
  // bind() {
  //   this.chartOps = {
  //     cutoutPercentage: 50,
  //     animation: {
  //       animateRotate: true,
  //       animateScale: true
  //     }
  //   }
  //   this.chartData = {
  //     labels: ["Blue", "Red", "Yellow"],
  //     datasets: [{
  //       data: [300, 50, 100],
  //       backgroundColor: this._colorList
  //     }],
  //     options: {
  //       title: {
  //         display: true,
  //         text: 'Custom Chart Title'
  //       },
  //       legend: {
  //         display: true,
  //         labels: {
  //           fontColor: 'rgb(255, 99, 132)'
  //         }
  //       }
  //     }
  //   }
  // }
}
