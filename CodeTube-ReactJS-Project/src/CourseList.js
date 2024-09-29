import styled from "styled-components";
import CourseCard from "./CourseCard.js";

const Left = styled.span`
  /* border: 1px solid black; */
  width: 70%;
  height: 39rem;

  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: auto;

  /* media quries */
  @media only screen and (max-width: 700px) {
    width: 100%;
    /* border: 1px solid; */
  }
`;

const Title = styled.span`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 35px;
  font-weight: 500;
  width: 100%;
  flex-direction: row;
  height: auto;
  text-align: center;
  /* media queries */
  @media only screen and (max-width: 875px) {
    font-size: 30px;
  }
`;

const CourseList = (props) => {
  const { courses, handleCart } = props;
  return (
    <>
      <Left>
        <Title>Courses</Title>
        {courses.map((course) => (
          <CourseCard course={course} handleCart={handleCart} />
        ))}
      </Left>
    </>
  );
};

export default CourseList;
