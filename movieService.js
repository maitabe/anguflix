
app.factory('movieService', function() {

	var allMovies = [
		{
			name: 'Spirited Away',
			director: 'Hayao Miyazaki',
			year: 2001,
			image: 'http://t1.gstatic.com/images?q=tbn:ANd9GcS6MveoDoJOg9-wMvtHE4ak_-HDZeYS1egb9PwRcf8lhrtcppMc',
			rating: 8.6,
			price: 25,
			description:'During her family&apos;s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.'
		},
		{
			name: 'Bridge of Spies',
			director: 'Steven Spielberg',
			year: 2015,
			image: 'http://www.impawards.com/2015/posters/bridge_of_spies_ver2_xxlg.jpg',
			rating: 7.6,
			price: 20,
			description:'During the Cold War, an American lawyer is recruited to defend an arrested Soviet spy in court, and then help the CIA facilitate an exchange of the spy for the Soviet captured American U2 spy plane pilot, Francis Gary Powers.'
		},
		{
			name: 'Interstellar',
			director: 'Christopher Nolan',
			year: 2014,
			image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_UY1200_CR69,0,630,1200_AL_.jpg',
			rating: 8.7,
			price: 24,
			description:'A team of explorers travel through a wormhole in space in an attempt to ensure humanitys survival.'
		},
		{
			name: 'Interstellar',
			director: 'Christopher Nolan',
			year: 2014,
			image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_UY1200_CR69,0,630,1200_AL_.jpg',
			rating: 8.7,
			price: 24,
			description:'A team of explorers travel through a wormhole in space in an attempt to ensure humanitys survival.'
		},
		{
			name: 'Spirited Away',
			director: 'Hayao Miyazaki',
			year: 2001,
			image: 'http://t1.gstatic.com/images?q=tbn:ANd9GcS6MveoDoJOg9-wMvtHE4ak_-HDZeYS1egb9PwRcf8lhrtcppMc',
			rating: 8.6,
			price: 25,
			description:'During her family&apos;s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.'
		},
		{
			name: 'Bridge of Spies',
			director: 'Steven Spielberg',
			year: 2015,
			image: 'http://www.impawards.com/2015/posters/bridge_of_spies_ver2_xxlg.jpg',
			rating: 7.6,
			price: 20,
			description:'During the Cold War, an American lawyer is recruited to defend an arrested Soviet spy in court, and then help the CIA facilitate an exchange of the spy for the Soviet captured American U2 spy plane pilot, Francis Gary Powers.'
		},
	];

	userMovies = [];

	var addUserMovies = function($index) {
		if(!userMovies[$index]){
			userMovies.push(allMovies[$index]);
		}
	};

	// var removeMovie = function() {
	// 	userMovies.splice($index, 1);
	// };

	return {
		allMovies:allMovies,
		userMovies:userMovies,
		addUserMovies:addUserMovies
	};

});