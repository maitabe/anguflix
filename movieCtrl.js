
app.controller('movieCtrl', function($scope, movieService) {
	// $scope.movie = "Spirited Away";

	//access all movies
	$scope.movies = movieService.allMovies;

	//print movies selected by user
	$scope.userMovies = movieService.userMovies;


	//invoke functions
	//add movie to "My collection section"
	$scope.addUserMovies = function() {
		movieService.addUserMovies(this.movie);
	};

	//remove movie from "my collection"
	$scope.removeMovieMyCollection = function() {
		movieService.removeMovie(this.$index);
	};

	//search movie by name
	$scope.findit = function(){
		$scope.searchResults = $scope.search;
	};

});