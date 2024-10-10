function ProfilePic() {
  // kalau url gambar harus dari luar bukan dari url file ini
  const imageUrl = "./src/assets/bagong.jpeg";
  const handleClick = (event) => {
    event.target.style.height = "150px";
    console.log(event);
  };
  return (
    <>
      <img onClick={(e) => handleClick(e)} src={imageUrl} alt="Profile Pic" />
    </>
  );
}

export default ProfilePic;
