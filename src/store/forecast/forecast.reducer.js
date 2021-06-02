const initialState = {
  globalIdLocal: null,
};

export function weatherForecast(state = initialState, action) {
  switch(action.type) {
    case "showForecast": 
      return {globalIdLocal: action.payload};
    default:
      return state;
  }
}
