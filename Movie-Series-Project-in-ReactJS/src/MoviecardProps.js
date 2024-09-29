import React from "react";

class MoviecardProps extends React.Component {
  // main render function to render the HTML elments
  render() {
    // destructring the data
    // const { title, plot, price, rating, starCount, fav, cart } = this.props;
    const { title, plot, price, rating, starCount, fav, cart, poster } =
      this.props.movieProp;
    const { movieProp, incStars, descStars, handleFavourite, handleCart } =
      this.props;
    console.log(this.props.movieProp);

    return (
      <>
        <div className="main">
          <div className="movie-card">
            {/* left side of movie card */}
            <div className="left">
              <img src={poster} alt="poster" />
            </div>

            {/* right side of  movie card*/}
            <div className="right">
              <div className="title">{title}</div>
              <div className="plot">{plot}</div>
              <div className="price">Rs. {price}</div>

              {/* footer under right side */}
              <div className="footer">
                <div className="rating">{rating}</div>
                <div className="star-dis">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                    alt="rating desc"
                    className="str-btn"
                    onClick={() => descStars(movieProp)}
                  />

                  <img
                    src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
                    alt="rating"
                    className="stars"
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/9312/9312231.png"
                    alt="rating inc"
                    className="str-btn"
                    onClick={() => incStars(movieProp)}
                  />

                  <span className="starCount">{starCount}</span>
                </div>

                {/* #1 way to toggle the favourite and unfavourite button */}
                {fav ? (
                  <button
                    className="unfavourite-btn"
                    onClick={() => handleFavourite(movieProp)}
                  >
                    Un-Favourite
                  </button>
                ) : (
                  <button
                    className="favourite-btn"
                    onClick={() => handleFavourite(movieProp)}
                  >
                    Favourite
                  </button>
                )}

                {/* #2 way to toggling*/}
                <button
                  className={cart ? "unfavourite-btn" : "cart-btn"}
                  onClick={() => handleCart(movieProp)}
                >
                  {cart ? "Remove from Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MoviecardProps;
