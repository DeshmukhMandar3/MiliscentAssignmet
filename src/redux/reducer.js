import {
  ADD_DATA_FAIL,
  ADD_DATA_SUCCESS,
  GET_DATA_FAIL,
  GET_DATA_SUCCESS,
  LOADING,
  RESET,
} from "./actionTypes";

let InitialState = {
  loading: false,
  data: [],
  length: 0,
  getDataSuccess: false,
  addDataSuccess: false,
  getDataFail: false,
  addDataFail: false,
};

export const Reducer = (state = InitialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case ADD_DATA_SUCCESS:
      return { ...state, addDataSuccess: true, loading: false };
    case ADD_DATA_FAIL:
      return { ...state, addDataFail: true, loading: false };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        getDataSuccess: true,
        loading: false,
        data: action.payload.data,
        length: action.payload.length,
      };
    case GET_DATA_FAIL:
      return { ...state, getDataFail: true, loading: false };
    case RESET:
      return { InitialState };
    default:
      return state;
  }
};
