MovieApp.controller('AddmovieController', function ($scope, FirebaseService) {
	$scope.movieName = '';
	$scope.desc = '';
	$scope.direct = '';
	$scope.year = '';
	
	$scope.addMovie = function () {
		if ($scope.movieName != '') {
			FirebaseService.addMovie({
				text: $scope.movieName,
				direct: $scope.direct,
				year: $scope.year,
				desc: $scope.desc
			});
		$scope.movieName = '';
		$scope.direct = '';
		$scope.year = '';
		$scope.desc = '';
                window.location ="#/";
		}
	}
});
