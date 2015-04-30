MovieApp.controller('ListmovieController', function ($scope, FirebaseService) {
	$scope.movies = FirebaseService.getMovies();
        
        
});
