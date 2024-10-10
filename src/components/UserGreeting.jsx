import propTypes from "prop-types";

export default function UserGreeting({ isLoggedin, userName }) {
  // HOW TO CONDITIONAL RENDER IN REACTJS

  // if (props.isLoggedin) {
  //   return <h2>Welcome {props.userName}</h2>;
  // }
  // return <h2>Please Login to continue</h2>;
  const welcomeMessage = (
    <h2 className="welcome-message">Selamat Datang Bro {userName}</h2>
  );

  const loginPrompt = (
    <h2 className="login-prompt">Please Login to continue Bro!</h2>
  );

  return isLoggedin ? welcomeMessage : loginPrompt;
}

UserGreeting.propTypes = {
  isLoggedin: propTypes.bool,
  userName: propTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedin: false,
  userName: "Guest",
};
