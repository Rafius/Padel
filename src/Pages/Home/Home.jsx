import React from "react";
import Header from "@/Components/Header/Header";
import Events from "@/Components/Events";
import { Main } from "./HomeStyled";
import useHomeHooks from "./HomeHooks";

const Home = () => {
  const {
    week,
    increaseWeek,
    decreaseWeek,
    setLowLeague,
    setMidLeague,
    league,
    schedule,
  } = useHomeHooks();

  console.log(schedule);
  return (
    <Main>
      <Header
        schedule={schedule}
        week={week}
        increaseWeek={increaseWeek}
        decreaseWeek={decreaseWeek}
        setLowLeague={setLowLeague}
        setMidLeague={setMidLeague}
        league={league}
      />
      <Events schedule={schedule} week={week} />
    </Main>
  );
};

export default Home;
