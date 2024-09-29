import { Component } from "react";
import MoviecardProps from "./MoviecardProps";

class MovieListProps extends Component {
  // we are lifting the constructor and data to the top which is App because we to share the data with Navbar also

  render() {
    const { movies,handleIncStars,handleDescStars,handleFavourite,handleCart } = this.props;
    return (
      <>
        {/* all the movies will be shown in the card */}
        {movies.map((movie) => (
          <MoviecardProps
            movieProp={movie}
            incStars={handleIncStars}
            descStars={handleDescStars}
            handleFavourite={handleFavourite}
            handleCart={handleCart}
          />
        ))}
      </>
    );
  }
}

export default MovieListProps;
