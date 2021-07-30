import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import { eventsApiCall } from '../services/api';

function Cards() {
  const tokens = useSelector((state => state.auth.tokens))
  const [events, setEvents] = useState([]);
  useEffect(() => {
    console.log(tokens?.access_token)
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
    <div className="cards">
      {events.length < 1 ? 'You have no events' : events.map(({ link, created, summary, status, startDate, endDate }, index) => (
      <Card
      key={`card-${index}`}
          link={link}
          created={created}
          summary={summary}
          status={status}
          startDate={startDate}
          endDate={endDate}
        />)
      )}
      
    </div>
  )
}

export default Cards
