import React from "react";

import Header from "@/components/Header/Header";
import Matches from "@/components/Matches";
import useMatchesHooks from "@/hooks/useMatchesHooks";
import { Main, SpinnerContainer } from "./HomeStyled";
import Loader from "@/components/Loader";

const Home = () => {
  const { isLoading } = useMatchesHooks();

  if (isLoading) return <Loader />;

  return (
    <Main>
      <Header />
      <Matches />
    </Main>
  );
};

export default Home;
