import React, { useState } from "react";
import "./Events.css";
import events from "../../events.json";
import {Link} from "react-router-dom";
import EventCard from "./EventCard";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import useIsMobile from "../../components/useIsMobile";
export default function Events() {
  const [currentTab, setCurrentTab] = useState(0);
    const isMobile = useIsMobile();
  return (
    <div>
        <Nav/>
    <div className="wrapper">
      {events.filter((event) => event.eventType === "main")
      .map((event) => (
    <div className="card">
      <div className="card__body">
        <img src={event.eventImage} class="card__image" />
        <h2 className="card__title">{event.eventTitle}</h2>
      </div>
      <Link to={`/${event.eventUrl}`}><button className="card__btn"><span>View Events</span></button></Link>
    </div>
      ))}
    </div>
    <Footer/>
    </div>
  );
}