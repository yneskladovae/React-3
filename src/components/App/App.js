import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";


export default function App(props) {
  const { avatar } = props.userStuff;
  return (
    <>
      <div className="page">
        <Header userStuff={props.userStuff}></Header>
        <Main avatar={avatar}></Main>
        <Footer></Footer>
      </div>
    </>
  );
}

