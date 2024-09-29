import React from "react";
import MovieList from "./MovieList";
import "./style.css";
import Navbar from "./Navbar";
import { movies } from "./MovieData";
import MovieListProps from "./MovieListProps";

function App1() {
  return (
    <>
      <Navbar />
      <MovieList />
    </>
  );
}

class App extends React.Component {
  // constructor for state
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
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
    movies[mid].starCount -= 0.5;
    console.log("2ns", movies);
    this.setState({
      movies: movies,
    });
    console.log(movies);
  };

  // handle the favourite btn
  handleFavourite = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);

    movies[mid].fav = !movies[mid].fav;
    this.setState({
      movies: movies,
    });
  };

  // handle the cart btn
  handleCart = (movie) => {
    let { movies, cartCount } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].cart = !movies[mid].cart;
    if (movies[mid].cart) cartCount += 1;
    else cartCount -= 1;
    this.setState({
      movies: movies,
      cartCount: cartCount,
    });
  };

  render() {
    const { movies, cartCount } = this.state;
    return (
      <>
        <Navbar cartCount={cartCount} />
        <MovieListProps
          movies={movies}
          handleIncStars={this.handleIncStars}
          handleDescStars={this.handleDescStars}
          handleFavourite={this.handleFavourite}
          handleCart={this.handleCart}
        />
      </>
    );
  }
}

export default App;
