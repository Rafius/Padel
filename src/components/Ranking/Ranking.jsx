import * as React from "react";
import { useSelector } from "react-redux";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { rankingDataSelector } from "@/redux/ranking";
import { TableCell, TableRow } from "@mui/material";

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
          <TableRow>
            {header.map((item) => (
              <TableCell key={item}>{item}</TableCell>
            ))}
          </TableRow>
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
              <TableRow key={name}>
                <TableCell align="center">{ranking}</TableCell>
                <TableCell align="center">{name}</TableCell>
                <TableCell align="center">{played}</TableCell>
                <TableCell align="center">{won}</TableCell>
                <TableCell align="center">{lose}</TableCell>
                <TableCell align="center">{points}</TableCell>
                <TableCell align="center">{gamesFor}</TableCell>
                <TableCell align="center">{gamesAgainst}</TableCell>
                <TableCell align="center">{gamesDifference}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Ranking;
