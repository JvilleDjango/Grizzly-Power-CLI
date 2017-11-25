import {CssAnimator} from 'aurelia-animator-css';

export class Workout {
  static inject = [CssAnimator];

  constructor(cssAnimator) {

    this._animator = cssAnimator;

    this.showWorkouts = true;
    this.showMicroCycles = true;
    this.activeStep = 1;
    this.isTransitioning = false;

    this.microcycle = [{
        id: 0,
        name: '8 Weeks'
      },
      {
        id: 1,
        name: '10 Weeks'
      },
      {
        id: 2,
        name: '12 Weeks'
      },
    ];

    this.selectedMicrocycle = null;

    this.workouts = [{
        id: 0,
        name: 'Squats'
      },
      {
        id: 1,
        name: 'Deadlifts'
      },
      {
        id: 2,
        name: 'Bench Press'
      },
      {
        id: 3,
        name: 'OH Press'
      },
    ];

    this.selectedWorkouts = [];

    this.programs = [{
      id: 0,
      weeks: 8,
      microcycle: [{
          week: 1,
          programs: [{
              lift: 'Squat',
              sets: 5,
              reps: ['0', '0', '0', '0', '0'],
              weight: 275,
              totalReps: 0
            },
            {
              lift: 'DeadLift',
              sets: 5,
              reps: ['0', '0', '0', '0', '0'],
              weight: 315,
              totalReps: 0
            },
            {
              lift: 'OhPress',
              sets: 5,
              reps: ['0', '0', '0', '0', '0'],
              weight: 185,
              totalReps: 0
            },
            {
              lift: 'BenchPress',
              sets: 5,
              reps: ['0', '0', '0', '0', '0'],
              weight: 225,
              totalReps: this.totalReps //TODO: Add up total reps
            },
          ]
        },
        {
          week: 2,
          programs: [{
              lift: 'Squat',
              sets: 5,
              reps: ['2', '0', '0', '0', '0'],
              weight: 275,
              totalReps: 0
            },
            {
              lift: 'DeadLift',
              sets: 5,
              reps: ['0', '2', '0', '0', '0'],
              weight: 315,
              totalReps: 0
            },
            {
              lift: 'OhPress',
              sets: 5,
              reps: ['0', '0', '2', '0', '0'],
              weight: 185,
              totalReps: 0
            },
            {
              lift: 'BenchPress',
              sets: 5,
              reps: ['0', '0', '0', '0', '0'],
              weight: 225,
              totalReps: this.totalReps //TODO: Add up total reps
            },
          ]
        },
        {
          week: 3,
          programs: [{
              lift: 'Squat',
              sets: 5,
              reps: ['2', '0', '0', '0', '0'],
              weight: 275,
              totalReps: 0
            },
            {
              lift: 'DeadLift',
              sets: 5,
              reps: ['0', '2', '0', '0', '0'],
              weight: 315,
              totalReps: 0
            },
            {
              lift: 'OhPress',
              sets: 5,
              reps: ['0', '0', '2', '0', '0'],
              weight: 185,
              totalReps: 0
            },
            {
              lift: 'BenchPress',
              sets: 5,
              reps: ['0', '0', '0', '0', '0'],
              weight: 225,
              totalReps: this.totalReps //TODO: Add up total reps
            },
          ]
        },
        {
          week: 4,
          programs: [{
              lift: 'Squat',
              sets: 5,
              reps: ['2', '0', '0', '0', '0'],
              weight: 275,
              totalReps: 0
            },
            {
              lift: 'DeadLift',
              sets: 5,
              reps: ['0', '2', '0', '0', '0'],
              weight: 315,
              totalReps: 0
            },
            {
              lift: 'OhPress',
              sets: 5,
              reps: ['0', '0', '2', '0', '0'],
              weight: 185,
              totalReps: 0
            },
            {
              lift: 'BenchPress',
              sets: 5,
              reps: ['0', '0', '0', '0', '0'],
              weight: 225,
              totalReps: this.totalReps //TODO: Add up total reps
            },
          ]
        },
        {
          week: 5,
          programs: [{
              lift: 'Squat',
              sets: 5,
              reps: ['2', '0', '0', '0', '0'],
              weight: 275,
              totalReps: 0
            },
            {
              lift: 'DeadLift',
              sets: 5,
              reps: ['0', '2', '0', '0', '0'],
              weight: 315,
              totalReps: 0
            },
            {
              lift: 'OhPress',
              sets: 5,
              reps: ['0', '0', '2', '0', '0'],
              weight: 185,
              totalReps: 0
            },
            {
              lift: 'BenchPress',
              sets: 5,
              reps: ['0', '0', '0', '0', '0'],
              weight: 225,
              totalReps: this.totalReps //TODO: Add up total reps
            },
          ]
        },
        {
          week: 6,
          programs: [{
              lift: 'Squat',
              sets: 5,
              reps: ['2', '0', '0', '0', '0'],
              weight: 275,
              totalReps: 0
            },
            {
              lift: 'DeadLift',
              sets: 5,
              reps: ['0', '2', '0', '0', '0'],
              weight: 315,
              totalReps: 0
            },
            {
              lift: 'OhPress',
              sets: 5,
              reps: ['0', '0', '2', '0', '0'],
              weight: 185,
              totalReps: 0
            },
            {
              lift: 'BenchPress',
              sets: 5,
              reps: ['0', '0', '0', '0', '0'],
              weight: 225,
              totalReps: this.totalReps //TODO: Add up total reps
            },
          ]
        },
        {
          week: 7,
          programs: [{
              lift: 'Squat',
              sets: 5,
              reps: ['2', '0', '0', '0', '0'],
              weight: 275,
              totalReps: 0
            },
            {
              lift: 'DeadLift',
              sets: 5,
              reps: ['0', '2', '0', '0', '0'],
              weight: 315,
              totalReps: 0
            },
            {
              lift: 'OhPress',
              sets: 5,
              reps: ['0', '0', '2', '0', '0'],
              weight: 185,
              totalReps: 0
            },
            {
              lift: 'BenchPress',
              sets: 5,
              reps: ['0', '0', '0', '0', '0'],
              weight: 225,
              totalReps: this.totalReps //TODO: Add up total reps
            },
          ]
        },
        {
          week: 8,
          programs: [{
              lift: 'Squat',
              sets: 5,
              reps: ['2', '0', '0', '0', '0'],
              weight: 275,
              totalReps: 0
            },
            {
              lift: 'DeadLift',
              sets: 5,
              reps: ['0', '2', '0', '0', '0'],
              weight: 315,
              totalReps: 0
            },
            {
              lift: 'OhPress',
              sets: 5,
              reps: ['0', '0', '2', '0', '0'],
              weight: 185,
              totalReps: 0
            },
            {
              lift: 'BenchPress',
              sets: 5,
              reps: ['0', '0', '0', '0', '0'],
              weight: 225,
              totalReps: this.totalReps //TODO: Add up total reps
            },
          ]
        }

      ]

    }];

    }

  attached() {

    this.stepper = $('step-wizard');
    //Set up metadata for moving around the wizard...
    this.pages = $('.step');
    this.pagesByIndex = {
      1: $('.step.step-1'), //Choose Microcycle
      2: $('.step.step-2'), //Add Workouts
      3: $('.step.step-3'), //Summary

    };
    let elem = this.pagesByIndex[1];
    elem.addClass('move-left');
    this._animator.enter(elem[0])
      .then(elem.addClass('current'));

    if (this.activeStep === 1) {
      $('li.active').parent("step-wizard").addClass('active')
    }

  }

  /* Wizard Navigation
  ====================================================================*/

  stepTo(idx, focusElem, isInCollapseSection) {
    if (this.isTransitioning || (this.activeStep === idx)) {
      return;
    }
    var from = this.pagesByIndex[this.activeStep],
      to = this.pagesByIndex[idx];


    if (this.activeStep < idx) {
      this.pages.removeClass('move-right').addClass('move-left');
    } else if (this.activeStep > idx) {
      this.pages.removeClass('move-left').addClass('move-right');
    }

    this.activeStep = idx;
    this.move(from, to, focusElem);

    if (this.stepper[idx - 1]) {
      $(this.stepper[idx]).removeClass('active')
      $(this.stepper[idx - 1]).addClass('active')

    }

  }

  /* GO TO NEXT */

  goNext() {
    if (this.isTransitioning || (this.activeStep > 3)) {
      return;
    }

    this.pages.removeClass('move-right').addClass('move-left');

    let fromPage = this.pagesByIndex[this.activeStep];

    this.activeStep++;

    if ((this.activeStep === 2 && !this.showWorkouts) || (this.activeStep === 3 && this.showSummary)) {
      this.activeStep++;
    }

    this.move(fromPage, this.pagesByIndex[this.activeStep]);

    if (this.stepper[this.activeStep - 1]) {
      $(this.stepper[this.activeStep]).removeClass('active')
      $(this.stepper[this.activeStep - 1]).addClass('active')

    }

  }

  /* GO BACK */

  goBack() {
    if (this.isTransitioning || (this.activeStep < 2)) {
      return;
    }
    this.pages.removeClass('move-left').addClass('move-right');

    let fromPage = this.pagesByIndex[this.activeStep];
    this.activeStep--;
    if ((this.activeStep === 2 && !this.showWorkouts) || (this.activeStep === 3 && !this.showSummary)) {
      this.activeStep--;
    }
    this.move(fromPage, this.pagesByIndex[this.activeStep]);

    if (this.stepper[this.activeStep - 1]) {
      $(this.stepper[this.activeStep]).removeClass('active')
      $(this.stepper[this.activeStep - 1]).addClass('active')

    }
  }
  move(fromElem, toElem, focusElem) {
    this.isTransitioning = true;
    this._animator.leave(fromElem[0])
      .then(() => {
        fromElem.removeClass('current');
      });
    this._animator.enter(toElem[0])
      .then(() => {
        toElem.addClass('current');
        this.isTransitioning = false;

      });
  }

}
