import styled from "styled-components";
import TeacherCard from "./TeacherCard.js";

const Right = styled.span`
  /* border: 1px solid black; */
  width: 30%;
  height: 100%;
  height: 39rem;
  background-color: white;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  @media only screen and (max-width: 700px) {
    width: 100%;
    flex-direction: row;
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Title = styled.span`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 35px;
  font-weight: 500;
  /* media queries */
  @media only screen and (max-width: 875px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 700px) {
    width: 100%;
    flex-direction: row;
    height: auto;
    text-align: center;
  }
`;
const TeacherList = (props) => {
  const { teachers, handleFollow } = props;
  // console.log("2", teachers)
  return (
    <>
      <div></div>
      <Right>
        <Title>Instructor</Title>

        {teachers.map((teacher) => (
          <TeacherCard teacher={teacher} handleFollow={handleFollow} />
        ))}
      </Right>
    </>
  );
};

export default TeacherList;
