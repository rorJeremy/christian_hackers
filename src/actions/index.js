export function selectEvent(event) {
  // selectEvent is an ActionCreator, it needs to return an action,
  // An action is an object with a type property.
  // console.log('An event has been selected', event.title);
  return {
    type: "EVENT_SELECTED",
    payload: event
  };
}