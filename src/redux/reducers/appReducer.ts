import { DECREMENT, INCREMENT } from "../actions/appAction";

const initialState = {
  counter: 0,
};

export const appReducer = (state=initialState, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + (action.payload || 1),
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
