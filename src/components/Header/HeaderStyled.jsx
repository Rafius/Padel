import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: rgb(243 244 246);
`;

export const HeaderContainerItem = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderItem = styled(Link)`
  margin: 10px;
  text-decoration: none;
  color: inherit;
`;

export const HeaderItemName = styled.h1`
  ${({ isActive }) => !isActive && "font-weight: normal"}
`;

export const Title = styled.h4`
  text-align: center;
  margin: 20px;
`;
