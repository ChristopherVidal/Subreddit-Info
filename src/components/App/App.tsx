import React from "react";
import "./App.css";
import MyNavBar from "../MyNavBar/MyNavBar";
import Main from "../Main/Main";

export default function App() {
  //Include navbar
  ////Inside, include a "home" button to take you to the search
  ////Also Inside, include a "About this App" section.
  //Include the main content area.
  ////The main content area may take on two different forms.
  //////1. A "blank" page with a search bar in the center
  //////2. A dashboard with the subreddit info.
  return (
    <>
      <MyNavBar />
      <Main />
    </>
  );
}
