import { Component } from "react";
import styled from "styled-components";

// styled component
const Nav = styled.div`
  height: 70px;
  background: #4267b2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
`;
const CartCount = styled.span`
  background: ${(props) => props.color};
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  top: -5px;
  font-size: 12px;
  // to set the dynamic styliing the props
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

const Title = styled.div`
  font-size: 30px;
  color: #fff;
  font-weight: 600;
  font-family: Montserrat, sans-serif;
  text-transform: uppercase;
  margin-left: 20px;
  // Styled using psedo class
  &:hover {
    color: yellow;
  }
`;

class Navbar extends Component {
  
 
  render() {
    return (
      <>
        {/* Inline styling for nav bar */}
        {/* <div
          style={{
            width: "100%",
            height: 70,
            background: "red",
            display: "flex",
            justifyContent: "space-between",
          }}
        > */}

        <Nav>
          <Title>Movie-App</Title>
          <div style={styles.cartContainer}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png"
              alt="Cart Icon"
              style={styles.cartIcon}
            />
            {/* <span style={styles.cartCount}>0</span>
             */}
            <CartCount color="yellow" show={true}>
             {this.props.cartCount}
            </CartCount>
          </div>
        </Nav>
      </>
    );
  }
}

export default Navbar;

// Internal styling for nav bar
const styles = {
  cartIcon: {
    height: 48,
    marginRight: 20,
  },
  nav: {
    height: 70,
    background: "#4267b2",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: 600,
    fontFamily: '"Montserrat", sans-serif',
    textTransform: "uppercase",
    marginLeft: 20,
  },

  cartContainer: {
    position: "relative",
    cursor: "pointer",
  },
  cartCount: {
    background: "orange",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 10,
    top: -5,
    fontSize: 12,
  },
};
