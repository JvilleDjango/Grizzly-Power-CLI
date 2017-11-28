let latency = 200;
let id = 0;

function getId() {
  return ++id;
}

export var userData = [{
    user: {
      id: getId(),
      userName: 'Jville Django',
      fullName: 'Jeremy R Miller',
      email: 'jmill110@hotmail.com',
      phone: '4805551234',
      profileImg: 'hulk.jpg',
    },
    settings: {
      units: 'Pounds (lbs)',
      timer: false,
      autoAdd: {
        auto: true,
        weight: '50'
      },
      goals: {
        bench: {
          weight: '315'
        },
        squat: {
          weight: '405'
        },
        deadlift: {
          weight: '500'
        },
        ohpress: {
          weight: '185'
        }
      },
      records: {
        bench: {
          weight: '275'
        },
        squat: {
          weight: '355'
        },
        deadlift: {
          weight: '455'
        },
        ohpress: {
          weight: '155'
        }
      },
      assistance_exercise: [
        'Donkey Calf Raises',
        'Paused Squats',
        'Paused Bench Press'
      ]
    },
    progress: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
          label: "Squat",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#4787ff",
          borderColor: "#4787ff",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#4787ff',
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#4787ff",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 3,
          pointHitRadius: 10,
          data: [225, 275, 285, 315, 315, 315, 355],
          spanGaps: false,
        },
        {
          label: "Bench Press",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#ffbf47",
          borderColor: "#ffbf47",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "#ffbf47",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#ffbf47",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 3,
          pointHitRadius: 10,
          data: [225, 275, 285, 285, 285, 285, 285],
          spanGaps: false,
        },
        {
          label: "DeadLift",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(255, 99, 71, 1)",
          borderColor: "rgba(255, 99, 71, 1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(255, 99, 71, 1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(255, 99, 71, 1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 3,
          pointHitRadius: 10,
          data: [235, 275, 315, 355, 405, 405, 435],
          spanGaps: false,
        },
        {
          label: "OH Press",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#212121",
          borderColor: "#212121",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "#212121",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#212121",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 3,
          pointHitRadius: 10,
          data: [90, 135, 155, 185, 205, 205, 205],
          spanGaps: false,
        }
      ]
    },
    history: [{
      day_of_week: 'Sun',
      day: 1,
      month: 'Jan',
      exercise_list: [{
          lift: 'Squat',
          reps: '5x5',
          weight: 275
        },
        {
          lift: 'DeadLift',
          reps: '5x5',
          weight: 315
        },
        {
          lift: 'OhPress',
          reps: '5x5',
          weight: 185
        },
        {
          lift: 'BenchPress',
          reps: '5x5',
          weight: 225
        }
      ]
    }, {
      day_of_week: 'Mon',
      day: 2,
      month: 'Jan',
      exercise_list: [{
          lift: 'Squat',
          reps: '5x5',
          weight: 275
        },
        {
          lift: 'DeadLift',
          reps: '5x5',
          weight: 315
        },
        {
          lift: 'OhPress',
          reps: '5x5',
          weight: 185
        },
        {
          lift: 'BenchPress',
          reps: '5x5',
          weight: 225
        },
        {
          lift: 'PausedBenchPress',
          reps: '8x3',
          weight: 205
        }
      ]
    }, {
      day_of_week: 'Tue',
      day: 3,
      month: 'Jan',
      exercise_list: [{
          lift: 'Squat',
          reps: '5x5',
          weight: 275
        },
        {
          lift: 'DeadLift',
          reps: '5x5',
          weight: 315
        },
        {
          lift: 'OhPress',
          reps: '5x5',
          weight: 185
        },
        {
          lift: 'BenchPress',
          reps: '5x5',
          weight: 225
        }
      ]
    }, {
      day_of_week: 'Wed',
      day: 4,
      month: 'Jan',
      exercise_list: [{
          lift: 'Squat',
          reps: '5x5',
          weight: 275
        },
        {
          lift: 'DeadLift',
          reps: '5x5',
          weight: 315
        },
        {
          lift: 'OhPress',
          reps: '5x5',
          weight: 185
        },
        {
          lift: 'BenchPress',
          reps: '5x5',
          weight: 225
        }
      ]
    }, {
      day_of_week: 'Thu',
      day: 5,
      month: 'Jan',
      exercise_list: [{
          lift: 'Squat',
          reps: '5x5',
          weight: 275
        },
        {
          lift: 'DeadLift',
          reps: '5x5',
          weight: 315
        },
        {
          lift: 'OhPress',
          reps: '5x5',
          weight: 185
        },
        {
          lift: 'BenchPress',
          reps: '5x5',
          weight: 225
        }
      ]
    }, {
      day_of_week: 'Fri',
      day: 6,
      month: 'Jan',
      exercise_list: [{
          lift: 'Squat',
          reps: '5x5',
          weight: 275
        },
        {
          lift: 'DeadLift',
          reps: '5x5',
          weight: 315
        },
        {
          lift: 'OhPress',
          reps: '5x5',
          weight: 185
        },
        {
          lift: 'BenchPress',
          reps: '5x5',
          weight: 225
        }
      ]
    }, {
      day_of_week: 'Sat',
      day: 7,
      month: 'Jan',
      exercise_list: [{
          lift: 'Squat',
          reps: '5x5',
          weight: 275
        },
        {
          lift: 'DeadLift',
          reps: '5x5',
          weight: 315
        },
        {
          lift: 'OhPress',
          reps: '5x5',
          weight: 185
        },
        {
          lift: 'BenchPress',
          reps: '5x5',
          weight: 225
        }
      ]
    }, {
      day_of_week: 'Sun',
      day: 8,
      month: 'Jan',
      exercise_list: [{
          lift: 'Squat',
          reps: '5x5',
          weight: 275
        },
        {
          lift: 'DeadLift',
          reps: '5x5',
          weight: 315
        },
        {
          lift: 'OhPress',
          reps: '5x5',
          weight: 185
        },
        {
          lift: 'BenchPress',
          reps: '5x5',
          weight: 225
        }
      ]
    }]
  }];
