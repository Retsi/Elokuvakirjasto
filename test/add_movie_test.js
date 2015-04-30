describe('Add movie', function () {
    var controller, scope;

    var FirebaseServiceMock;

    beforeEach(function () {
        // Lisää moduulisi nimi tähän
        module('MyAwesomeModule');

        FirebaseServiceMock = (function () {
            var movies = [
                {
                    text: 'Elokuva',
                    direct: 'Mies',
                    year: '2005',
                    desc: 'Ei'
                },
                {
                    text: 'Toinen elokuva',
                    direct: 'Nainen',
                    year: '2003',
                    desc: 'Joo'
                }
            ]
            return {
                // Toteuta FirebaseServicen mockatut metodit tähän
                addMovie: function (name, director, year, desc) {
                    movies.push(name, director, year, desc);
                },
                getMovies: function () {
                    return movies;
                }
            }
        })();

        // Lisää vakoilijat
        // spyOn(FirebaseServiceMock, 'jokuFunktio').and.callThrough();
        spyOn(FirebaseServiceMock, 'addMovie').and.callThrough();
        spyOn(FirebaseServiceMock, 'getMovies').and.callThrough();

        // Injektoi toteuttamasi kontrolleri tähän
        inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            // Muista vaihtaa oikea kontrollerin nimi!
            controller = $controller('AddmovieController', {
                $scope: scope,
                FirebaseService: FirebaseServiceMock
            });
        });
    });

    /*
     * Testaa alla esitettyjä toimintoja kontrollerissasi
     */

    /*
     * Testaa, että käyttäjä pystyy lisäämään elokuvan oikeilla tiedoilla.
     * Muista myös tarkistaa, että Firebasen kanssa keskustelevasta palvelusta
     * on kutsutta oikeaa funktiota lisäämällä siihen vakoilijan ja käyttämällä
     * toBeCalled-oletusta.
     */
    it('should be able to add a movie by its name, director, release date and description', function () {
        scope.movieName = 'Joo';
	scope.desc = 'Ei';
	scope.direct = 'adasd';
	scope.year = '2001';
        scope.addMovie();
        expect(FirebaseServiceMock.addMovie).toHaveBeenCalled();
    });

    /*	
     * Testaa, ettei käyttäjä pysty lisäämään elokuvaa väärillä tiedoilla.
     * Muista myös tarkistaa, että Firebasen kanssa keskustelevasta palvelusta
     * EI kutsuta funktiota, joka hoitaa muokkauksen. Voit käyttää siihen
     * not.toBeCalled-oletusta (muista not-negaatio!).
     */
    it('should not be able to add a movie if its name, director, release date or description is empty', function () {
        scope.movieName = '';
	scope.desc = '';
	scope.direct = '';
	scope.year = '';
        scope.addMovie();
        expect(FirebaseServiceMock.addMovie).not.toHaveBeenCalled();
    });
});