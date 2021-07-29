import axios from "axios";
import { useEffect, useReducer } from "react";

const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
};

const BASE_URL = "https://lit-mesa-08641.herokuapp.com/events";

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, events: [] };

    case ACTIONS.GET_REQUEST:
      return { ...state, loading: false, events: action.payload.events };

    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        events: [],
        error: action.payload.error,
      };

    default:
      return state;
  }
}

export default function useFetchEvents() {
  const [state, dispatch] = useReducer(reducer, { events: [], loading: true });

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    axios
      .get(BASE_URL,{cancelToken:cancelToken.token})
      .then((res) => {
        dispatch({ type: ACTIONS.GET_DATA, payload: { events: res.data } });
      })
      .catch((e) => {
        if(axios.isCancel(e)) return
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });
  });

  return state;
}
