
app.factory('movieService', function() {

	var allMovies = [
		{
			id:1,
			name: 'Spirited Away',
			director: 'Hayao Miyazaki',
			year: 2001,
			image: 'http://t1.gstatic.com/images?q=tbn:ANd9GcS6MveoDoJOg9-wMvtHE4ak_-HDZeYS1egb9PwRcf8lhrtcppMc',
			rating: 8.6,
			price: 25,
			description:'During her family&apos;s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.'
		},
		{
			id:2,
			name: 'Bridge of Spies',
			director: 'Steven Spielberg',
			year: 2015,
			image: 'http://www.impawards.com/2015/posters/bridge_of_spies_ver2_xxlg.jpg',
			rating: 7.6,
			price: 20,
			description:'During the Cold War, an American lawyer is recruited to defend an arrested Soviet spy in court, and then help the CIA facilitate an exchange of the spy for the Soviet captured American U2 spy plane pilot, Francis Gary Powers.'
		},
		{
			id:3,
			name: 'Interstellar',
			director: 'Christopher Nolan',
			year: 2014,
			image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_UY1200_CR69,0,630,1200_AL_.jpg',
			rating: 8.7,
			price: 24,
			description:'A team of explorers travel through a wormhole in space in an attempt to ensure humanitys survival.'
		},
		{
			id:4,
			name: 'Interstellar 2',
			director: 'Christopher Nolan',
			year: 1989,
			image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_UY1200_CR69,0,630,1200_AL_.jpg',
			rating: 8.7,
			price: 24,
			description:'A team of explorers travel through a wormhole in space in an attempt to ensure humanitys survival.'
		},
		{
			id:5,
			name: 'Spirited Away 2',
			director: 'Hayao Miyazaki',
			year: 2010,
			image: 'http://t1.gstatic.com/images?q=tbn:ANd9GcS6MveoDoJOg9-wMvtHE4ak_-HDZeYS1egb9PwRcf8lhrtcppMc',
			rating: 8.6,
			price: 25,
			description:'During her family&apos;s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.'
		},
		{
			id:6,
			name: 'Bridge of Spies 2',
			director: 'Steven Spielberg',
			year: 1999,
			image: 'http://www.impawards.com/2015/posters/bridge_of_spies_ver2_xxlg.jpg',
			rating: 7.6,
			price: 20,
			description:'During the Cold War, an American lawyer is recruited to defend an arrested Soviet spy in court, and then help the CIA facilitate an exchange of the spy for the Soviet captured American U2 spy plane pilot, Francis Gary Powers.'
		},
	];

	userMovies = [];

	var money = 50;
	//sometimes is better to use an object when you have nested controllers

	//rest price of movie from money
	var isEnoughMoney = function(priceMovie) {
		if(money >= priceMovie) {
			money -= priceMovie;
			return true;
		}else{
			return false;
		}
	};

	var getMoney = function(){
		return money;
	};

	var addUserMovies = function(selectedMovie) {

		if(isEnoughMoney(selectedMovie.price)) {
				//there is money - add movie
					//find the id of the movie selected
				var result = userMovies.find(function(movie) {
					//testing function(the anonymous func): will give me back the object(value) of the movie
					return movie.id === selectedMovie.id;
				});
				//check if user collection has selected movie
				if(result === undefined){
					// not found in collection
					userMovies.push(selectedMovie);
				}
				return true;
			}
			return false;
	};

	var removeMovie = function(index, selectedMovie) {
		userMovies.splice(index, 1);

		money += selectedMovie.price;

	};


	return {
		allMovies:allMovies,
		userMovies:userMovies,
		addUserMovies:addUserMovies,
		removeMovie:removeMovie,
		money:money,
		getMoney:getMoney
	};

});