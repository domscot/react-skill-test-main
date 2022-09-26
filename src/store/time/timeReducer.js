import { UPDATE_TIME } from "../types";

const defaultState = {
  timePassed: 0,
};

const timeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_TIME:
      return {
        ...state,
        timePassed: state.timePassed + action.payload,
      };

    default:
      return state;
  }
};

export default timeReducer;
