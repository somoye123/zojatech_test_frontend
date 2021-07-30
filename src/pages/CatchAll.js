import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";
import { add } from '../redux/authSlice';
import { tokenApiCall } from "../services/api";

function CatchAll() {
  const dispatch = useDispatch();
  const [tokenFound, setTokenFound ] = useState(false)

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const code = query.get('code');
    const getToken = async () => {
      const token = await tokenApiCall(code);
      if(token.access_token) {
        dispatch(add(token));
        setTokenFound(true);
      }      
    }
    getToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(tokenFound)
  if(tokenFound) {
    return <Redirect to="/events"/>
  } else {
    <Redirect to="/"/>
  }
  return (
    <div>
      Loading.......
    </div>
  )
}

export default CatchAll;
