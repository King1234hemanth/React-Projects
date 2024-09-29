import { Component } from "react";
// import Moviecard from "./Moviecard";
import MoviecardProps from "./MoviecardProps";

class MovieList extends Component {
  // constructor for state
  constructor() {
    super();
    this.state = {
      movies: [
        {
          title: "The Avengers",
          plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          poster:
            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
          rating: "8.0",
          price: 99,
          starCount: 0,
          fav: false,
          cart: false,
        },
        {
          title: "The Dark Knight",
          plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
          poster:
            "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
          rating: "9.0",
          price: 199,
          starCount: 0,
          fav: false,
          cart: false,
        },
        {
          title: "Iron Man",
          plot: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
          poster:
            "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
          rating: "7.9",
          price: 139,
          starCount: 0,
          fav: false,
          cart: false,
        },
      ],
    };
  }

  // increase the stars function
  handleIncStars = (movie) => {
    const { movies } = this.state;
    console.log("movie", movie);
    const mid = movies.indexOf(movie);
    if (movies[mid].starCount >= 5) {
      return;
    }

    movies[mid].starCount += 0.5;
    this.setState({
      movies: movies,
    });
  };

  // decrease the stars function
  handleDescStars = (movie) => {
    console.log("decrease the count");
    const { movies } = this.state;
    let mid = movies.indexOf(movie);
    if (movies[mid].starCount <= 0) {
      return;
    }
    console.log("1sr0", movies)
    movies[mid].starCount -= 0.5;
    console.log("2ns", movies)
    this.setState({
      movies:movies
    });
    console.log(movies)
  };

  // handle the favourite btn
  handleFavourite = (movie) => {
    const {movies} = this.state;
    const mid = movies.indexOf(movie);

    movies[mid].fav = !movies[mid].fav
    this.setState({
      movies: movies,
    });
  };

  // handle the cart btn
  handleCart = (movie) => {
    const {movies} = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].cart = !movies[mid].cart
    this.setState({
      movies: movies
    });
  };

  render() {
    // const { title, plot, price, rating, starCount, fav, cart } = this.state;
    const { movies } = this.state;
    return (
      <>
        {/* <MoviecardProps 
            title = {title}
            plot = {plot}
            price = {price}
            rating = {rating}
            starCount = {starCount}
            fav = {fav}
            cart = {cart}
        /> */}

        {/* all the movies will be shown in the card */}
        {movies.map((movie) => (
          <MoviecardProps
            movieProp={movie}
            incStars={this.handleIncStars}
            descStars={this.handleDescStars}
            handleFavourite = {this.handleFavourite}
            handleCart = {this.handleCart}
          />
        ))}
      </>
    );
  }
}

export default MovieList;
