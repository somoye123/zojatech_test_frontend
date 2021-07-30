import axios from 'axios';
import { AUTH_URL, TOKEN_URL, EVENTS_URL } from './constants';

export const authUser = async () => {
  const { data } =  await axios.get(AUTH_URL);
  const { url } = data.data;
  return url;
}