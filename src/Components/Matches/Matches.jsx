import * as React from "react";
import { Table, Button, Space } from "antd";
import "antd/dist/antd.css";
import { weeks } from "./matches.json";
import { Main, Title } from "./MatchesStyles";

const columns = [
  {
    title: "Equipo local",
    dataIndex: "local",
    render: (text) => <h4>{text}</h4>,
    width: "50%",
  },
  {
    title: "Equipo Visitante",
    dataIndex: "rival",
    render: (text) => <h4>{text}</h4>,
    width: "50%",
  },
];

const Matches = () => {
  const [currentWeek, setCurrentWeek] = React.useState(0);

  const handleChange = ({ current }) => {
    setCurrentWeek(current - 1);
  };

  const totalMatches = weeks.map((item) => [...item.matches]).flat();

  return (
    <Main>
      <Title>Semana {currentWeek + 1}</Title>
      <Table
        columns={columns}
        dataSource={totalMatches}
        pagination={{
          pageSize: 5,
          position: ["bottomCenter"],
        }}
        onChange={handleChange}
        size="large"
        rowKey="local"
      />
    </Main>
  );
};

export default Matches;
