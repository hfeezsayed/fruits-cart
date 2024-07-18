import React from "react";
import "./Home.css";
import HeroSection from "../../components/HomeLayout/HeroSection/HeroSection";
import PolicyRow from "../../components/HomeLayout/PolicyRow/PolicyRow";
import OrganicProducts from "../../components/OrganicProducts/OrganicProducts";
import ThreeFruitsCard from "../../components/HomeLayout/ThreeFruitsCards/ThreeFruitsCard";
import FreshFruits from "../../components/HomeLayout/FreshFruits/FreshFruits";
import ClientSaying from "../../components/HomeLayout/ClientSaying/ClientSaying";

const Home = () => {
  return (
    <>
      <HeroSection />
      <PolicyRow />
      <OrganicProducts />
      <ThreeFruitsCard />
      <FreshFruits />
      <ClientSaying />
    </>
  );
};

export default Home;
