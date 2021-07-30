import axios from 'axios';
import { AUTH_URL, TOKEN_URL, EVENTS_URL } from './constants';

export const authUser = async () => {
  const { data } =  await axios.get(AUTH_URL);
  const { url } = data.data;
  return url;
}

export const tokenApiCall = async (tokenUrl) => {
  try {
    const { data } =  await axios.get(TOKEN_URL, {
      headers: {
        tokenUrl
      }
    });
    const { tokens } = data.data.token;
    return tokens;
  } catch (error) {
    return error;
  }
}

export const eventsApiCall = async (tokens) => {
  try {
    const { data } =  await axios.get(EVENTS_URL, {
      headers: {
        ...tokens,
      }
    });
    console.log(data)
    const { events } = data;
    return events;
  } catch (error) {
    throw new Error(error.message);
  }
}