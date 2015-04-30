MovieApp.service('FirebaseService', function ($firebase) {
    var firebaseRef = new Firebase('https://torrid-torch-2867.firebaseio.com/movies');
    var sync = $firebase(firebaseRef);
    var movies = sync.$asArray();

    this.addMovie = function (name, direct, year, desc) {
        movies.$add(name, direct, year, desc);
    }

    this.getMovies = function () {
        return movies;
    }
});
