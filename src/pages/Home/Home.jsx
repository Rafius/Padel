import React from "react";

import Header from "@/components/Header/Header";
import Events from "@/components/Events";
import useEventsHooks from "@/hooks/useMatchesHooks";
import { Main, SpinnerContainer } from "./HomeStyled";
import Loader from "@/components/Loader";

const Home = () => {
  const { isLoading } = useEventsHooks();

  if (isLoading) return <Loader />;

  return (
    <Main>
      <Header />
      <Events />
    </Main>
  );
};

export default Home;
