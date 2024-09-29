import { Component } from "react";
import Navbar from "./Navbar";
import CourseList from "./CourseList";
import { courses } from "./CourseListData";
import styled from "styled-components";
import TeacherList from "./TeacherList";
import { teachers } from "./TeachersData";

const Container = styled.div`
  border-right: 1px solid silver;
  display: flex;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      courses: courses,
      teachers: teachers,
      cartCount: 0,
    };
  }

  // Add to cart button
  handleCart = (course) => {
    let { courses, cartCount } = this.state;
    const cid = courses.indexOf(course);
    courses[cid].isInCart = !courses[cid].isInCart;

    // cart count imcrease or decrease
    if (courses[cid].isInCart) cartCount += 1;
    else cartCount -= 1;

    this.setState({
      courses: courses,
      cartCount: cartCount,
    });
  };

  // follow button
  handleFollow = (teacher) => {
    let { teachers } = this.state;
    const tid = teachers.indexOf(teacher);
    teachers[tid].isFollow = !teachers[tid].isFollow;
    this.setState({
      teachers: teachers,
    });
  };

  render() {
    let { courses, cartCount, teachers } = this.state;
    console.log("hello", teachers);
    return (
      <>
        <Navbar cartCount={cartCount} />
        <Container>
          <CourseList courses={courses} handleCart={this.handleCart} />
          <TeacherList teachers={teachers} handleFollow={this.handleFollow} />
        </Container>
      </>
    );
  }
}

export default App;
