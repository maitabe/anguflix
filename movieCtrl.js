
app.controller('movieCtrl', function($scope, movieService) {
	// $scope.movie = "Spirited Away";

	//access all movies
	$scope.movies = movieService.allMovies;

	//print movies selected by user
	$scope.userMovies = movieService.userMovies;

    // init money balance
    $scope.coins = movieService.getMoney();

	//invoke functions
	//add movie to "My collection section"
	$scope.addUserMovies = function() {

		// add it to model collection
		var isMoney = movieService.addUserMovies(this.movie);

		// update money balance
		$scope.coins = movieService.getMoney();

		if(!isMoney){ //if movie not added because was not money
		 $scope.errorMsg = 'Out of money';
		}
	};

	//remove movie from "my collection"
	$scope.removeMovieMyCollection = function() {
		movieService.removeMovie(this.$index, this.movie);

		// update money balance
		$scope.coins = movieService.getMoney();
	};

	//search movie by name
	$scope.findit = function(){
		$scope.searchResults = $scope.search;
	};

});
