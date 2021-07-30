import { useEffect, useState } from 'react';
import Card from '../components/Card';

function Cards() {
  const [events, setEvents] = useState([]);
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
