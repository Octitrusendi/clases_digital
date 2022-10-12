
const movies = require('./movies');

let moviesDH = {
        listMovies: function(){
                return movies
        },
        searchMovie(dato){
        let movies = this.listMovies();
        let search = movies.find(elemento => (elemento.title === dato) || (elemento.id === dato))
        if (search === undefined){
                return null;
        }return search;
        },
        searchMoviesByGenre(genero){
        let movies = this.listMovies();
        let generosFiltrados = movies.filter(generos => generos.genere === genero);
        if (generosFiltrados.length == 0){
                return null;  
        }return generosFiltrados;
        },
        totalPrice(){
        let movies = this.listMovies();
        let totalPrecios = movies.reduce((acumulador, i) => {
                return (acumulador + i.price) 
        },0)
        return totalPrecios;
        }, 
        changeMovieGenre(id, newGenere){
        let pelisCoinciden = this.searchMovie(id);
        if (pelisCoinciden !== null){
                pelisCoinciden.genere = newGenere
                return pelisCoinciden
        }
        return "No existe este ID"
        }
        
}
//console.log(moviesDH.listMovies())
//console.log(moviesDH.searchMovie())
//console.log(moviesDH.searchMovie('La vida es bella'))
//console.log(moviesDH.searchMoviesByGenre('Ciencia Ficción'))
console.log(moviesDH.changeMovieGenre(44, "hola"));
