import styled from "styled-components";

export const EventMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid lightgray;
`;

export const Status = styled.div`
  margin-right: 10px;
  color: ${({ result }) => (result ? "green" : "red")};
  min-width: 100px;
  font-weight: 600;
`;

export const TeamNames = styled.div`
  min-width: 200px;
`;

export const HomeTeam = styled.div`
  font-weight: ${({ won }) => won && 600};
`;

export const AwayTeam = styled.div``;

export const Result = styled.div`
  font-weight: 600;
  color: green;
  min-width: 50px;
`;

export const HomeResult = styled.div``;

export const AwayResult = styled.div``;
