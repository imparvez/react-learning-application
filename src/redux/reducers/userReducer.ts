import { UPDATE_USER } from "../actions/userAction";

const initialState = {
    uid: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };
  
  export const userReducer = (state=initialState, action: any) => {
    switch (action.type) {
      case UPDATE_USER:
        return {
          ...state,
          ...action.payload
        };
      default:
        return state;
    }
  };
