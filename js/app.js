angular.module('TodoApp', ['ngRoute', 'RouteControllers', 'UserService', 'angular-storage', 'TodoService']); //createing a new Angular module (angular.module)
 
angular.module('TodoApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/accounts/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });
    .when('/todo', {
    	templateUrl: 'templates/todo.html',
    	controller: 'TodoController'
    }); // register and create our todo items using API
});


/*

In Angular, we have to bind our controllers to our HTML. 
We usually do this by using the ng-controller directive. However, 
because we’re using angular-route we need to do this from our app config. 
This is defined on line 3. All we need to do is pass in $routeProvider. 
$routeProvider is a module that is contained within the ngRoute app that we injected earlier.

Inside our app config we have defined two routes:
/ and /accounts/register

For each route inside our route config we have two properties:
templateUrl
controller



*/