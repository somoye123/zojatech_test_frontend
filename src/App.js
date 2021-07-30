// import axios from "axios";
import React, { useState, useEffect } from "react";
import Container, {
  Cards,
  Header,
  Body,
  Sidebar,
  Sidebar2,
} from "./App.module.js";
import useFetchEvents from "./functions/useFetchEvents.js";
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
import { authUser } from "./services/api.js";

function App() {
  // const { events, loading, error } = useFetchEvents();
  const [token, setToken] = useState(null);
  useEffect(() => {
    if(!token) {
      const authorize = async () => {
        const url = await authUser();
        window.location.href = url;
      }
      authorize();
    }
  }, [])



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
          {/* <FaInfo onClick={()=>console.log(events)}/> */}
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
            <Cards />
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
