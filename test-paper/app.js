var app = angular.module('quiz', ['ngRoute']);
app.config(function($routeProvider)
 { $routeProvider 
    .when('/', { templateUrl : 'views/start_test.html', controller : 'StartTestController' }) 
    .when('/show', { templateUrl : 'views/show_test.html', controller : 'ShowTestController' }) 
    .when('/summary', { templateUrl : 'views/summary.html', controller : 'SummaryController' }) 
    .otherwise({redirectTo: '/'}); 
});