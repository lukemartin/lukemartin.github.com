/**
 * luke.is - Portfolio of Luke Martin
 * @version 6.0.0
 * @link http://luke.is
 * 
 */

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _directivesAppHeader = require('./directives/appHeader');

var _directivesAppHeader2 = _interopRequireDefault(_directivesAppHeader);

var app = angular.module('app', ['ui.router']);

app.directive('appHeader', _directivesAppHeader2['default']);

app.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(false);

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('about', {
    url: '/about/',
    templateUrl: 'templates/about.html'
  }).state('index', {
    url: '/',
    templateUrl: 'templates/index.html'
  });
});

},{"./directives/appHeader":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function appHeader($rootScope) {

  function link($scope, element) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

      if (toState.url === '/') {
        element.addClass('mh--full');
      } else {
        element.removeClass('mh--full');
      }
    });
  }

  return {
    restrict: 'A',
    link: link
  };
}

exports['default'] = appHeader;
module.exports = exports['default'];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbHVrZS9EZXZlbG9wbWVudC9TaXRlcy9sdWtlbWFydGluLmdpdGh1Yi5jb20vc3JjL2pzL2FwcC5qcyIsIi9Vc2Vycy9sdWtlL0RldmVsb3BtZW50L1NpdGVzL2x1a2VtYXJ0aW4uZ2l0aHViLmNvbS9zcmMvanMvZGlyZWN0aXZlcy9hcHBIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O21DQ0FzQix3QkFBd0I7Ozs7QUFFOUMsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOztBQUVqRCxHQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsbUNBQVksQ0FBQzs7QUFFdEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFDLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBSzs7QUFFcEUsbUJBQWlCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVuQyxvQkFBa0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRWxDLGdCQUFjLENBQ1gsS0FBSyxDQUFDLE9BQU8sRUFBRTtBQUNkLE9BQUcsRUFBRSxTQUFTO0FBQ2QsZUFBVyxFQUFFLHNCQUFzQjtHQUNwQyxDQUFDLENBQ0QsS0FBSyxDQUFDLE9BQU8sRUFBRTtBQUNkLE9BQUcsRUFBRSxHQUFHO0FBQ1IsZUFBVyxFQUFFLHNCQUFzQjtHQUNwQyxDQUFDLENBQUM7Q0FFTixDQUFDLENBQUM7Ozs7Ozs7O0FDdEJILFNBQVMsU0FBUyxDQUFDLFVBQVUsRUFBRTs7QUFFN0IsV0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRTtBQUM3QixjQUFVLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLFVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBSzs7QUFFdkYsVUFBSSxPQUFPLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTtBQUN2QixlQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO09BRTlCLE1BQU07QUFDTCxlQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO09BQ2pDO0tBRUYsQ0FBQyxDQUFDO0dBQ0o7O0FBRUQsU0FBTztBQUNMLFlBQVEsRUFBRSxHQUFHO0FBQ2IsUUFBSSxFQUFKLElBQUk7R0FDTCxDQUFDO0NBQ0g7O3FCQUVjLFNBQVMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IGFwcEhlYWRlciBmcm9tICcuL2RpcmVjdGl2ZXMvYXBwSGVhZGVyJztcblxuY29uc3QgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsndWkucm91dGVyJ10pO1xuXG5hcHAuZGlyZWN0aXZlKCdhcHBIZWFkZXInLCBhcHBIZWFkZXIpO1xuXG5hcHAuY29uZmlnKCgkbG9jYXRpb25Qcm92aWRlciwgJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikgPT4ge1xuXG4gICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZShmYWxzZSk7XG5cbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuXG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgLnN0YXRlKCdhYm91dCcsIHtcbiAgICAgIHVybDogJy9hYm91dC8nLFxuICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvYWJvdXQuaHRtbCdcbiAgICB9KVxuICAgIC5zdGF0ZSgnaW5kZXgnLCB7XG4gICAgICB1cmw6ICcvJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2luZGV4Lmh0bWwnXG4gICAgfSk7XG5cbn0pO1xuIiwiZnVuY3Rpb24gYXBwSGVhZGVyKCRyb290U2NvcGUpIHtcblxuICBmdW5jdGlvbiBsaW5rKCRzY29wZSwgZWxlbWVudCkge1xuICAgICRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIChldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcykgPT4ge1xuXG4gICAgICBpZiAodG9TdGF0ZS51cmwgPT09ICcvJykge1xuICAgICAgICBlbGVtZW50LmFkZENsYXNzKCdtaC0tZnVsbCcpO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKCdtaC0tZnVsbCcpO1xuICAgICAgfVxuXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgbGlua1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhcHBIZWFkZXI7XG4iXX0=
