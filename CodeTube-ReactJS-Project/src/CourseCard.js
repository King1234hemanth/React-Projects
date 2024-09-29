// Course Card component

import "./courseCard.css";

const CourseCard = (props) => {
  const { img, title, rating, language, lectures, price, isInCart } =
    props.course;
  console.log("course", props);
  const { handleCart, course } = props;
  console.log(props);
  return (
    <>
      {/* outer div */}
      <div className="main">
        {/* course img */}
        <div className="top">
          <img src={img} alt="course-img" />
        </div>

        {/* middle text or course text */}
        <div className="middle">
          <p>{title}</p>
        </div>

        {/* footer which contains language, no of lectures,rating, price */}
        <div className="footer">
          {/* left part contains rating, language and no of lectures */}
          <div className="left">
            {/* rating div */}
            <div className="rating">
              <img
                src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
                alt="rating"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
                alt="rating"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
                alt="rating"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
                alt="rating"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/2107/2107737.png"
                alt="rating"
              />
              <span>{rating}</span>{" "}
            </div>

            {/* left side bottom contains language, and lectures */}
            <div className="left-bottom">
              <div className="inner">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5403/5403606.png"
                  alt="language"
                />
                <span>{language}</span>
              </div>

              <div className="inner">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5346/5346453.png"
                  alt="no of lectures"
                />{" "}
                <span>{lectures}</span>
              </div>
            </div>
          </div>
          {/* end of left ide */}

          {/* right side contans price */}
          <div className="right">
            <img
              src="https://cdn-icons-png.flaticon.com/128/991/991952.png"
              alt="price"
            />
            <span>{price}</span>
          </div>
        </div>

        {/* add to cart button */}
        <div className="cart">
          {!isInCart ? (
            <button
              className="cartColorPurple"
              onClick={() => handleCart(course)}
            >
              Add to Cart
            </button>
          ) : (
            <button className="cartColorRed" onClick={() => handleCart(course)}>
              Remove to Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CourseCard;
