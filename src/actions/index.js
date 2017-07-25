import axios from "axios";
export const FETCH_EVENTS = 'fetch_events';

const ROOT_URL = "http://localhost:3003/api/v1";

export function fetchEvents() {
  // selectEvent is an ActionCreator, it needs to return an action,
  // An action is an object with a type property.
  // console.log('An event has been selected', event.title);
  const request = axios.get(`${ROOT_URL}/events`);

  return {
    type: "FETCH_EVENTS",
    payload: request
  };
}