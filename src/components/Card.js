import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { Cards } from "../App.module.js";

function Card({ link, created, summary, status, startDate, endDate }) {
  return (
    <div>
      <a href={link}>
        <Cards>
            <p className="title">{ summary }</p>
            <span>Date:</span>
            <p>
              <b>{format(new Date(created), 'MMMM dd, yyyy')}</b>
            </p>
            <p>
              {startDate} - {endDate}
            </p>
            <p>{status}</p>
        </Cards>
      </a>
    </div>
  )
}

Card.propTypes = {
  link: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired
}

export default Card;
