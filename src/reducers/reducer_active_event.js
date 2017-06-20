// State argument is not application state, only the state
// this reducer is responsible for

// If we don't give state a value, this reducer would return it as undefined.
// redux doesn't allow a reducer to return undefined, so that's why we go ahead and 
// set state = null in the very beginning.
export default function(state = null, action) {
  switch (action.type) {
    case "EVENT_SELECTED":
      return action.payload;
  }

  return state;
}