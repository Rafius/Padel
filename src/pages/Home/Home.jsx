import React from "react";
import Header from "@/components/Header/Header";
import Events from "@/components/Events";
import { Main } from "./HomeStyled";

const Home = () => (
  <Main>
    <Header />
    <Events />
  </Main>
);

export default Home;
