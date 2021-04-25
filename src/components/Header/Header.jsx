import React from "react";


function Header(props) {
  const { user, avatar } = props.userData;
  return (
    <header>
      {user.firstName} {user.lastName}
    </header>
  );
}

export default Header;
