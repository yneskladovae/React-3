import React from "react";


function Main(props) {
  const avatar = props.avatar;
  return (
    <main>
      <img src={avatar.image} alt={avatar.alt} />
    </main>
  );
}

export default Main;
