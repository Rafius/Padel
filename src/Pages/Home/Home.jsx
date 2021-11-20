import React from "react";
import Header from "@/Components/Header/Header";
import Events from "@/Components/Events";
import { Main } from "./HomeStyled";
import { schedule } from "./schedule.json";
import useHomeHooks from "./HomeHooks";

const Home = () => {
  const { week, increaseWeek, decreaseWeek } = useHomeHooks();

  return (
    <Main>
      <Header
        schedule={schedule}
        week={week}
        increaseWeek={increaseWeek}
        decreaseWeek={decreaseWeek}
      />
      <Events schedule={schedule} week={week} />
    </Main>
  );
};

export default Home;
