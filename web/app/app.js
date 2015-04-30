// Toteuta moduulisi tänne
var MovieApp = angular.module('MovieApp', ['firebase', 'ngRoute', 'validation.match']);

MovieApp.config(function ($routeProvider) {
    // Lisää reitit tänne
    $routeProvider
    	    .when('/', {
    	    	controller: 'ListmovieController',
    	    	templateUrl: 'app/views/movies.html'
    	    	})
            .when('/movies', {
                controller: 'ListmovieController',
                templateUrl: 'app/views/movies.html'
            })
            .when('/movies/add', {
                controller: 'AddmovieController',
                templateUrl: 'app/views/addmovie.html'
            })
            .otherwise({
                redirectTo: '/'
            });
});
