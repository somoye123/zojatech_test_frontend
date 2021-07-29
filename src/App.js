// import axios from "axios";
// import React, { useState, useEffect } from "react";
import Container, {
  Cards,
  Header,
  Body,
  Sidebar,
  Sidebar2,
} from "./App.module.js";
// import useFetchEvents from "./functions/useFetchEvents.js";
import logo from "./assets/calendar.png";
import avatar from "./assets/avatar.png";
import {
  FaBars,
  FaChevronLeft,
  FaChevronRight,
  FaInfo,
  FaLightbulb,
  FaMap,
  FaPenFancy,
  FaPlus,
  FaSearch,
  FaVideo,
} from "react-icons/fa";

function App() {
  // const { events, loading, error } = useFetchEvents();
  // const [events, setEvents] = useState([]);
  // const BASE_URL = "https://lit-mesa-08641.herokuapp.com/api/events";

  // const getEvents = async () => {
  //   try {
  //     axios.get(BASE_URL).then((res) => setEvents(res.data.items));
  //     console.log(events);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   getEvents();
  // }, []);

  return (
    <Container>
      <Header>
        <div className="content-left">
          <FaBars />
          <img src={logo} alt="Logo Icon" />
          <h3 className="logo-text">Calendar</h3>
          <div>
            <FaChevronLeft />
            <FaChevronRight />
          </div>
        </div>
        <div className="content-right">
          <FaSearch />
          <FaInfo />
          <img src={avatar} alt="Avatar Logo" />
        </div>
      </Header>
      <div>
        <Sidebar>
          <button>
            <FaPlus />
            <span>Create</span>
          </button>
        </Sidebar>
        <Body>
          <div className="container">
            <h4>My Events</h4>
            <hr />
            <div className="cards">
            <Cards>
                <p className="title">Stand up Meeting</p>
                <span>Date:</span>
                <p><b>27/10/2021</b></p>
                <p><b>09:00</b> am - <b>09:30</b> am</p>
              </Cards>
              <Cards>
                <p className="title">Stand up Meeting</p>
                <span>Date:</span>
                <p><b>27/10/2021</b></p>
                <p><b>09:00</b> am - <b>09:30</b> am</p>
              </Cards>
              <Cards>
                <p className="title">Stand up Meeting</p>
                <span>Date:</span>
                <p><b>27/10/2021</b></p>
                <p><b>09:00</b> am - <b>09:30</b> am</p>
              </Cards>
              <Cards>
                <p className="title">Stand up Meeting</p>
                <span>Date:</span>
                <p><b>27/10/2021</b></p>
                <p><b>09:00</b> am - <b>09:30</b> am</p>
              </Cards>
            </div>
          </div>
        </Body>
        <Sidebar2>
          <FaLightbulb />
          <FaPenFancy />
          <FaMap />
          <hr />
          <FaVideo />
          <FaPlus />
        </Sidebar2>
      </div>
    </Container>
  );
}

export default App;
