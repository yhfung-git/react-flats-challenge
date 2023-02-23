// Computing new state from given action
const flatsReducer = (state, action) => {
  if (state === undefined) {
    // Reducer initialisation
    return [];
  }

  // Handle some actions (user switch case in reducers)
  switch(action.type) {
    case 'SET_FLATS':
      return action.payload;
    default:
      return state;
  }
}

export default flatsReducer;
