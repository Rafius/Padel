import React from "react";

import Event from "./Event";

const Events = ({ schedule, week }) =>
  schedule[week].events.map((event, index) => <Event key={index} {...event} />);

export default Events;
