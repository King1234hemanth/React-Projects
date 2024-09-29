import React from "react";

class Moviecard extends React.Component {
  rating = 5;
  // constructor for state
  constructor() {
    super();
    this.state = {
      title: "The Avengers!",
      plot: "Supernatural powers are there in this movie",
      price: 199,
      rating: 8.9,
      starCount: 0,
      fav: false,
      cart: false,
    };
    // we can bind it here or bind when we are passing the refrence or we can use arrow function.
    this.incStars = this.incStars.bind(this);
  }

  // increase the stars function
  incStars() {
    console.log("increase the count");

    if (this.state.starCount >= 5) {
      return;
    }

    // if (this.rating <= 5) this.starCount++; we can't update it in this way because the output will not show on UI because we need to render it, and we can't re-render it because the rendering is done in another function that's why we use setState() function.

    // there are 2 forms to use setState() #form1
    this.setState({
      starCount: this.state.starCount + 0.5,
    });

    // 1) setState() do batching in #1 form it will batch them together and render only the last one it we do +2 then only that last will get rendered.

    // this.setState({
    //   starCount: this.state.starCount + 0.5
    // })
    // this.setState({
    //   starCount: this.state.starCount + 0.5
    // })

    //2) setState() is asynchronous first it will call outside the callback one and then setSate() one after that inside the callback will be called

    // this.setState({
    //   starCount: this.state.starCount + 0.5
    // },() => {
    //   console.log("inside the callback", this.state.starCount)
    // })

    // console.log("outside the callback", this.state.starCount)
  }

  // decrease the stars function
  descStars = () => {
    console.log("decrease the count");

    if (this.state.starCount <= 0) {
      return;
    }
    // #form 2 setState
    // used when we need to bother the previous state in the component

    this.setState((prevState) => {
      return {
        starCount: prevState.starCount - 0.5,
      };
    });

    // 1) setState() do not do batching in #2 form it will call each and every setState() funct and render only once this happens because we are using previous state in the callback.

    // this.setState((prevState) => {
    //   return{
    //     starCount: prevState.starCount - 0.5
    //   }
    // })
    // this.setState((prevState) => {
    //   return{
    //     starCount: prevState.starCount - 0.5
    //   }
    // })
  };

  // handle the favourite btn
  handleFavourite = () => {
    this.setState({
      fav: !this.state.fav,
    });
  };

  // handle the favourite btn
  handleCart = () => {
    this.setState({
      cart: !this.state.cart,
    });
  };

  // main render function to render the HTML elments
  render() {
    // destructring the data
    const { plot, price, rating, starCount, fav, cart } = this.state;

    return (
      <>
        <div className="main">
          <div className="movie-card">
            {/* left side of movie card */}
            <div className="left">
              <img
                src="https://i.etsystatic.com/13367669/r/il/db21fd/2198543930/il_570xN.2198543930_4qne.jpg"
                alt="poster"
              />
            </div>

            {/* right side of  movie card*/}
            <div className="right">
              <div className="title">{this.state.title}</div>
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
                    onClick={this.descStars}
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
                    onClick={this.incStars}
                  />

                  <span className="starCount">{starCount}</span>
                </div>

                {/* #1 way to toggle the favourite and unfavourite button */}
                {fav ? (
                  <button
                    className="unfavourite-btn"
                    onClick={this.handleFavourite}
                  >
                    Un-Favourite
                  </button>
                ) : (
                  <button
                    className="favourite-btn"
                    onClick={this.handleFavourite}
                  >
                    Favourite
                  </button>
                )}

                {/* #2 way to toggling*/}
                <button
                  className={cart ? "unfavourite-btn" : "cart-btn"}
                  onClick={this.handleCart}
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

export default Moviecard;
