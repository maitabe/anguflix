
app.controller('movieCtrl', function($scope, movieService) {
	// $scope.movie = "Spirited Away";

	//access all movies
	$scope.movies = movieService.allMovies;

	//print movies selected by user
	$scope.userMovies = movieService.userMovies;


	//invoke function
	$scope.addUserMovies = function($index) {
		movieService.addUserMovies($index);
	};

	// $scope.removeMovie = function($index) {
	// 	movieService.removeMovie($index);
	// };

});