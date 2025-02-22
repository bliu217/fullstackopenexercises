import React from "react";

const Header = (props) => {
  return <h2>{props.courseName}</h2>;
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      <b>
        total exercises{" "}
        {props.parts.reduce((sum, part) => sum + part.exercises, 0)}
      </b>
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
