import React, { useState } from "react";
import EventButton from "../components/EventButton.jsx";
import Navbar from "../components/Navbar.jsx";
import { Redirect } from "react-router-dom";

const Events = () => {
  // Component style
  const style = {
    groupButton: {
      padding: "10px",
      height: "90vh",
      display: "grid",
      gridTemplateRows: "33% 33% 33%"
    }
  };

  // State definition
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [nextPath, setNextPath] = useState("/events/");

  // Handler functions
  const handleClick = eventType => {
    if (eventType === "Boisson") {
      setNextPath(nextPath + "drink");
      setShouldRedirect(true);
    } else if (eventType === "Miction") {
      setNextPath(nextPath + "urination");
      setShouldRedirect(true);
    } else if (eventType === "Défécation") {
      setNextPath(nextPath + "defecation");
      setShouldRedirect(true);
    }
  };

  // Render
  return (
    <div>
      {shouldRedirect && <Redirect to={nextPath} />}
      <div>
        <div style={style.groupButton}>
          <EventButton
            text="Boisson"
            onClick={() => handleClick("Boisson")}
            backgroundColor="lightblue"
          />
          <EventButton
            text="Miction"
            onClick={() => handleClick("Miction")}
            backgroundColor="lightyellow"
          />
          <EventButton
            text="Défécation"
            onClick={() => handleClick("Défécation")}
            backgroundColor="lightgreen"
          />
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Events;
