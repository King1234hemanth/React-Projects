// Teachers Card component
import styled from "styled-components";

const Main = styled.div`
  width: 85%;
  /* border: 1px solid; */
  margin: 10px;
  background-color: white;
  background-color: rgb(228, 224, 224);

  border-radius: 19px;
  @media only screen and (max-width: 1070px) {
    width: 104%;
  }
  @media only screen and (max-width: 777px) {
    width: 114%;
  }
  @media only screen and (max-width: 700px) {
    width: 46%;
  }
  @media only screen and (max-width: 560px) {
    width: 40%;
    /* border: 1px solid; */
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  padding: 10px;
  border-radius: 25px;
`;

const Text = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  @media only screen and (max-width: 777px) {
    font-size: 17px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 13px;
  }
`;

const Button = styled.button`
  width: 80%;
  margin: 10px;
  margin-left: 35px;
  font-size: 16px;
  padding: 8px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  /* background-color: rgb(103, 1, 103); */
  color: white;
  outline: none;
  cursor: pointer;
  border-radius: 15px;
  /* background-color: rgb(103, 1, 103); */
  background-color: ${(props) =>
    !props.isFollow ? "rgb(103, 1, 103)" : "red"};

  @media only screen and (max-width: 1464px) {
    width: 86%;
    margin-left: 20px;
  }
  @media only screen and (max-width: 1070px) {
    margin-left: 12px;
  }
  @media only screen and (max-width: 700px) {
    font-size: 13px;
  }
`;

const TeacherCard = (props) => {
  const { img, title, isFollow } = props.teacher;
  const { teacher, handleFollow } = props;
  return (
    <>
      {/* outer div */}
      <Main>
        {/* course img */}

        <Img src={img} alt="teacher-img" />

        {/* middle text or course text */}

        <Text>{title}</Text>

        {/* Follow button */}
        {!isFollow ? (
          <Button onClick={() => handleFollow(teacher)} isFollow={isFollow}>
            Follow Me
          </Button>
        ) : (
          <Button onClick={() => handleFollow(teacher)} isFollow={isFollow}>
            Un-Follow
          </Button>
        )}
      </Main>
    </>
  );
};

export default TeacherCard;
