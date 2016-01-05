import appHeader from './directives/appHeader';

const app = angular.module('app', ['ui.router']);

app.directive('appHeader', appHeader);

app.config(($locationProvider, $stateProvider, $urlRouterProvider) => {

  $locationProvider.html5Mode(false);

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('about', {
      url: '/about/',
      templateUrl: 'templates/about.html'
    })
    .state('index', {
      url: '/',
      templateUrl: 'templates/index.html'
    });

});
