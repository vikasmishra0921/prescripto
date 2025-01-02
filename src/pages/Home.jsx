import React from "react";
import Hedaer from "../component/Hedaer";
import SpecialityMenu from "../component/SpecialityMenu";
import TopDoctors from "../component/TopDoctors";
import Banner from "../component/Banner";

const Home = () => {
  return (
    <div>
      <Hedaer />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
    </div>
  );
};

export default Home;
