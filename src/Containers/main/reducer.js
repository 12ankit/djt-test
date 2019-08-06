import * as types from "./actionTypes";

const apiConst = {
  payload: [],
  isLoading: false,
  isSuccess: false,
  error: {
    isError: false,
    error: {}
  }
};

const initialState = {
  carTypes: { ...apiConst },
  fuelTypes: { ...apiConst },
  varientTypes: { ...apiConst }
};

export function carState(state = initialState, action) {
  switch (action.types) {
    case types.GET_CAR_TYPE:
      return { ...state };
    default:
      return { ...state };
  }
}
