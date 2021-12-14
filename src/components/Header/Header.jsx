import React from "react";
import { useLocation } from "react-router";
import Leagues from "../Leagues/Leagues";
import useHeaderHooks from "./useHeaderHooks";

import {
  HeaderContainer,
  HeaderContainerItem,
  HeaderItem,
  HeaderItemName
} from "./HeaderStyled";

const headerItems = [
  {
    name: "Jornadas",
    path: "/"
  },
  {
    name: "Clasificacion",
    path: "/ranking"
  }
];

const Header = () => {
  const { league, handleSetLeague } = useHeaderHooks();
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path;

  return (
    <HeaderContainer>
      <HeaderContainerItem>
        {headerItems.map(({ name, path }) => (
          <HeaderItem to={path} key={name}>
            <HeaderItemName isActive={isActive(path)}>{name}</HeaderItemName>
          </HeaderItem>
        ))}
      </HeaderContainerItem>
      <Leagues handleSetLeague={handleSetLeague} league={league} />
    </HeaderContainer>
  );
};

export default Header;
