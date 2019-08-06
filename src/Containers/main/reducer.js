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
  switch (action.type) {
    case types.GET_CAR_TYPE:
      return {
        ...state,
        carTypes: {
          ...apiConst,
          isLoading: true
        }
      };
    case types.GET_CAR_TYPE_SUCCESS:
      return {
        ...state,
        carTypes: {
          ...state.carTypes,
          payload: action.payload,
          isLoading: false,
          isSuccess: true
        }
      };
    case types.GET_CAR_TYPE_FAILURES:
      return {
        ...state,
        carTypes: {
          ...state.carTypes,
          isLoading: false,
          error: {
            isError: true,
            error: action.error
          }
        }
      };
    case types.GET_FUEL_TYPE:
      return {
        ...state,
        fuelTypes: {
          ...apiConst,
          isLoading: true
        }
      };
    case types.GET_FUEL_TYPE_SUCCESS:
      return {
        ...state,
        fuelTypes: {
          ...state.fuelTypes,
          payload: action.payload,
          isLoading: false,
          isSuccess: true
        }
      };
    case types.GET_FUEL_TYPE_FAILURES:
      return {
        ...state,
        fuelTypes: {
          ...state.fuelTypes,
          isLoading: false,
          error: {
            isError: true,
            error: action.error
          }
        }
      };
    case types.GET_VARIENT:
      return {
        ...state,
        varientTypes: {
          ...apiConst,
          isLoading: true
        }
      };
    case types.GET_VARIENT_SUCCESS:
      return {
        ...state,
        varientTypes: {
          ...state.varientTypes,
          payload: action.payload,
          isLoading: false,
          isSuccess: true
        }
      };
    case types.GET_VARIENT_FAILURES:
      return {
        ...state,
        varientTypes: {
          ...state.varientTypes,
          isLoading: false,
          error: {
            isError: true,
            error: action.error
          }
        }
      };
    default:
      return { ...state };
  }
}
