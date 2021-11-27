import React from "react";

import Header from "@/components/Header/Header";
import Matches from "@/components/Matches";
import useHomeHooks from "./useHomeHooks";
import { Main, SpinnerContainer } from "./HomeStyled";
import Loader from "@/components/Loader";

const Home = () => {
  const { isLoading } = useHomeHooks();

  if (isLoading) return <Loader />;

  return (
    <Main>
      <Header />
      <Matches />
    </Main>
  );
};

export default Home;
