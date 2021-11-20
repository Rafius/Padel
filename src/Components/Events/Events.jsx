import React from "react";

import useEventsHooks from "@/hooks/useMatchesHooks";
import Event from "./Event";

const Events = () => {
  const { events } = useEventsHooks();

  return events.map((event, index) => <Event key={index} {...event} />);
};

export default Events;
