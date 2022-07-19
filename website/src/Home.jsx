import React from "react";
import web from "../src/image/brain.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
       name="Grow your Business with"
       imgsrc={web}
       visit="/Service"
       btname="Get Started" />
       
    </>
  );
};

export default Home;
