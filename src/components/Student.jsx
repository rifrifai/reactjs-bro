import propTypes from "prop-types";

function Student({ name, age, isStudent }) {
  return (
    <>
      <div className="student">
        <p>Hello, I am {name}</p>
        <p>My age is {age}</p>
        <p>Student: {isStudent ? "Yes, I am" : "No, I am not"}</p>
      </div>
    </>
  );
}

Student.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
  isStudent: propTypes.bool,
};

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};

export default Student;
