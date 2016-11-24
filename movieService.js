
app.factory('movieService', function() {

	var movies = [
		{
			name: 'Spirited Away',
			director: 'Hayao Miyazaki',
			year: 2001,
			image: 'http://t1.gstatic.com/images?q=tbn:ANd9GcS6MveoDoJOg9-wMvtHE4ak_-HDZeYS1egb9PwRcf8lhrtcppMc',
			rating: 8.6,
			price: 25,
			description:'During her family&quot;s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.'
		}

	];

	return movies;

});