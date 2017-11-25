export class App {
  configureRouter(config, router) {
    config.title = 'Grizzly Power';
    config.options.icon = 'fitness_center';
    //config.options.pushState = true;

    config.map([{
        route: 'profile',
        name: 'profile',
        moduleId: './views/profile/profile',
        nav: true,
        title: 'My Profile',
        settings: {
          icon: 'person'
        }
      }, {
        route: ['', 'dashboard'],
        name: 'dashboard',
        moduleId: './views/dashboard/dashboard',
        nav: true,
        title: 'Dashboard',
        settings: {
          icon: 'dashboard'
        }
      },
      {
        route: 'history',
        name: 'history',
        moduleId: './views/history/history',
        nav: true,
        title: 'History',
        settings: {
          icon: 'history'
        }
      },
      {
        route: 'progress',
        name: 'progress',
        moduleId: './views/progress/progress',
        nav: true,
        title: 'Progress',
        settings: {
          icon: 'multiline_chart'
        }
      },
      {
        route: 'calendar',
        name: 'calendar',
        moduleId: './views/calendar/calendar',
        nav: true,
        title: 'Calendar',
        settings: {
          icon: 'event'
        }
      },
      {
        route: 'settings',
        name: 'settings',
        moduleId: './views/settings/settings',
        nav: false,
        title: 'Settings',
        settings: {
          icon: 'settings'
        }
      },
      {
        route: 'workout',
        name: 'workout',
        moduleId: './views/workout/workout',
        nav: false,
        title: 'Workout Entry',
        settings: {
          icon: 'fitness_center'
        }
      }

    ]);

    this.router = router;

  }
}
