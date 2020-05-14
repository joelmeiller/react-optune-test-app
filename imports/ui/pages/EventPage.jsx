// React
import React, { useState } from "react";
import styled from "styled-components";

// Meteor
import { useTracker } from "meteor/react-meteor-data";

// Collection
import { Events } from "../../api/db/Events";

// Components
import { Button } from "../components/atoms/Button";
import { Title } from "../components/atoms/Title";

import { EventCard } from "../components/molecules/EventCard";
import { Modal } from "../components/molecules/Modal";

const StyledEventList = styled.ul`
  margin-bottom: 48px;
`;

export const EventPage = ({}) => {
  const events = useTracker(() => {
    return Events.find().fetch();
  });

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Title>Upcoming Events</Title>

      <StyledEventList>
        {events.map((event) => (
          <EventCard
            as="li"
            key={event._id}
            title={event.title}
            date={event.date}
          />
        ))}
      </StyledEventList>

      <Button onClick={() => setShowModal(true)}>Add new event</Button>

      <Modal show={showModal} label="event" onClose={() => setShowModal(false)}>
        <Title>Add event</Title>
      </Modal>
    </div>
  );
};
