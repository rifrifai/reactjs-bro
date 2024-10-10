import profilePic from "../assets/bagong.jpeg";

function Card() {
  return (
    <>
      <div className="card">
        <img className="card-image" src={profilePic} alt="profile picture" />
        <h2 className="card-title">Bro RiV</h2>
        <p className="card-text">
          I do love coding and learning new things but I have no good circle
          around it.
        </p>
      </div>
    </>
  );
}

export default Card;
