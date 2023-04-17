import axios from "axios";
import {
  ADD_DATA_FAIL,
  ADD_DATA_SUCCESS,
  GET_DATA_FAIL,
  GET_DATA_SUCCESS,
  LOADING,
  RESET,
} from "./actionTypes";
export const addData = async (dispatch, data) => {
  data = {
    ...data,
    available: +data.available,
    units: +data.units,
    idle: +data.idle,
  };
  dispatch({ type: LOADING });
  try {
    let res = await axios.post(
      "https://equable-spotted-thorium.glitch.me/Properties",
      data
    );
    localStorage.setItem("data", JSON.stringify(res.data));
    dispatch({ type: ADD_DATA_SUCCESS });
  } catch (err) {
    dispatch({ type: ADD_DATA_FAIL });
  }
};

export const getData = async (dispatch, page, limit, type, prop, sort, ord) => {
  dispatch({ type: LOADING });
  let Type = "";
  let propName = "";
  let SortBy = "";
  let Order = ord ? "desc" : "asc";

  if (type.length > 0) {
    Type = `type=${type}`;
  }
  if (prop.length > 0) {
    propName = `&propertyName_like=${prop}`;
  }
  if (sort.length > 0) {
    SortBy = `&_sort=${sort}&_order=${Order}`;
  }

  try {
    let resall = await axios.get(
      `https://equable-spotted-thorium.glitch.me/Properties?${Type}${propName}`
    );
    let res = await axios.get(
      `https://equable-spotted-thorium.glitch.me/Properties?${Type}${propName}${SortBy}&_page=${page}&_limit=${limit}`
    );
    if (res.data && resall.data) {
      dispatch({
        type: GET_DATA_SUCCESS,
        payload: { data: res.data, length: resall.data.length },
      });
    }
  } catch (err) {
    dispatch({ type: GET_DATA_FAIL });
  }
};

export const reset = (dispatch) => {
  dispatch({ type: RESET });
};
