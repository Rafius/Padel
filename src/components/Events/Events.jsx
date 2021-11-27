import React from "react";

import useEventsHooks from "@/hooks/useMatchesHooks";
import Event from "./Event";
import { EventContainer } from "./EventsStyled";

const Events = () => {
  const { events } = useEventsHooks();

  return (
    <EventContainer>
      {events.map((event, index) => (
        <Event key={index} {...event} index={index} />
      ))}
    </EventContainer>
  );
};

export default Events;
