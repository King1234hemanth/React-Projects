import React from "react";

function Home({ loggedIn, setLoggedIn }) {
  return (
    <>
      <div id="container">
        <div className="home page">
          <h3>Rapid Retail</h3>
          <div className="auth-status">
            <span
              className={`${loggedIn && "active"}`}
              onClick={() => setLoggedIn(true)}
            >
              {" "}
              Login User
            </span>
            <span
              className={`${!loggedIn && "active"}`}
              onClick={() => setLoggedIn(false)}
            >
              {" "}
              LogOut User
            </span>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3343/3343850.png"
            alt=""
          />
          <p>
            Rapid Retail is an ecommerce store that offers a wide range of
            products for customers who want to make fast and convenient
            purchases. At Rapid Retail, we are committed to providing the best
            online shopping experience for our customers, with a focus on speed,
            convenience, and quality.
          </p>
          <div className="socails">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png"
              alt="ig"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png"
              alt="twitter"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
              alt="facebook"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
