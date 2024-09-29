import styled from "styled-components";

// styling for navbar
const Nav = styled.div`
  height: 70px;
  background-color: purple;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
`;
const Title = styled.div`
  font-size: 30px;
  color: #fff;
  font-weight: 600;
  font-family: Montserrat, sans-serif;
  text-transform: uppercase;
  margin-left: 20px;
  &:hover {
    color: yellow;
  }
`;

const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const CartIcon = styled.img`
  height: 48px;
  margin-right: 20px;
`;

const CartCount = styled.div`
  background-color:silver;
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  top: -5px;
  font-size: 12px;
  color: white;
  font-weight: 700;
`;

const Navbar = (props) => {
  const {cartCount} = props;
  return (
    <>
      <Nav>
        <Title>Code-Tube</Title>
        <CartContainer>
          <CartIcon
            src="https://cdn-icons-png.flaticon.com/128/3643/3643914.png"
            alt="Cart Icon"
          />
          <CartCount>{cartCount}</CartCount>
        </CartContainer>
      </Nav>
    </>
  );
};

export default Navbar;
