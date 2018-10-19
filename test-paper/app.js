var app = angular.module('quiz', ['ngRoute']);
app.config(function($routeProvider)
 { $routeProvider 
    .when('/', { templateUrl : 'start_test.html', controller : 'StartTestController' }) 
    .when('/show', { templateUrl : 'show_test.html', controller : 'ShowTestController' }) 
    .when('/summary', { templateUrl : 'summary.html', controller : 'SummaryController' }) 
    .otherwise({redirectTo: '/'}); 
});