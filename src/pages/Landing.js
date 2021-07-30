import { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authUser } from "../services/api.js";


function Landing() {
  const tokens = useSelector((state) => state.auth.tokens)
  if(tokens?.access_token) {
    <Redirect to="/events" />;
  }

  useEffect(() => {
      const authorize = async () => {
        const url = await authUser();
        window.location.href = url;
      }
      authorize();
  }, []);
  return (
    <Fragment>  
    </Fragment>
  )
}

export default Landing
