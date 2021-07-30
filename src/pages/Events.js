// import axios from "axios";
import Container, {
  Cards,
  Header,
  Body,
  Sidebar,
  Sidebar2,
} from "../App.module";
import logo from "../assets/calendar.png";
import avatar from "../assets/avatar.png";
import {
  FaBars,
  FaChevronLeft,
  FaChevronRight,
  FaLightbulb,
  FaMap,
  FaPenFancy,
  FaPlus,
  FaSearch,
  FaVideo,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { eventsApiCall } from "../services/api";
import Card from '../components/Card';


function App() {
  const tokens = useSelector((state) => state.auth.tokens);
  if(tokens == null) {
    <Redirect to="/" />
  }
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const getEvents = async () => {
      try {
        if(tokens?.access_token) {
          const events = await eventsApiCall(tokens);
          setEvents(events)
          console.log(events)
        }
      } catch (error) {
        console.log(error);
      }
    }
    getEvents()
  })

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
            <Cards>
            {events.length < 1 ? 'You have no events' : events.map(({ htmlLink, created, summary, status, start, end }, index) => (
              <Card
              key={`card-${index}`}
                  link={htmlLink}
                  created={created}
                  summary={summary}
                  status={status}
                  startDate={start.date}
                  endDate={end.date}
                />)
              )}
            </Cards>
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
