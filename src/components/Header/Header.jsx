import React from "react";

import Button from "@/components/Button";
import Leagues from "@/components/Leagues";
import Select from "@/components/Select";

import { HeaderContainer, Info } from "./HeaderStyled";
import useHeaderHooks from "./useHeaderHooks";

const Header = () => {
  const { week, league, titles, handleSelect, handleSetLeague } =
    useHeaderHooks();

  return (
    <HeaderContainer>
      <Leagues handleSetLeague={handleSetLeague} league={league} />
      <Info>
        <Select options={titles} handleSelect={handleSelect} week={week} />
      </Info>
    </HeaderContainer>
  );
};

export default Header;
