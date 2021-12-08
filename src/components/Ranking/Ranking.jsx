import * as React from "react";
import { useSelector } from "react-redux";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { rankingDataSelector } from "@/redux/ranking";
import { StyledTableCell, StyledTableRow } from "./RankingStyled";

const header = [
  "Clasificacion",
  "Equipos",
  "Partidos jugados",
  "Victorias",
  "Derrotas",
  "Puntos",
  "Juegos a Favor",
  "Juegos en Contra",
  "Diferencia de juegos",
];

const Ranking = () => {
  const ranking = useSelector(rankingDataSelector);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <StyledTableRow>
            {header.map((item) => (
              <StyledTableCell key={item}>{item}</StyledTableCell>
            ))}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {ranking.map(
            ({
              name,
              played,
              won,
              lose,
              points,
              gamesFor,
              gamesAgainst,
              gamesDifference,
              ranking,
            }) => (
              <StyledTableRow key={name}>
                <StyledTableCell align="center">{ranking}</StyledTableCell>
                <StyledTableCell align="center">{name}</StyledTableCell>
                <StyledTableCell align="center">{played}</StyledTableCell>
                <StyledTableCell align="center">{won}</StyledTableCell>
                <StyledTableCell align="center">{lose}</StyledTableCell>
                <StyledTableCell align="center">{points}</StyledTableCell>
                <StyledTableCell align="center">{gamesFor}</StyledTableCell>
                <StyledTableCell align="center">{gamesAgainst}</StyledTableCell>
                <StyledTableCell align="center">
                  {gamesDifference}
                </StyledTableCell>
              </StyledTableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Ranking;
