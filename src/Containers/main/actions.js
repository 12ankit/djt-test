import * as types from "./actionTypes";

export const actionCreator = type => params => ({ type, ...params });

export const getCartType = actionCreator(types.GET_CAR_TYPE);
export const getCartTypeSuccess = actionCreator(types.GET_CAR_TYPE_SUCCESS);
export const getCartTypeFailure = actionCreator(types.GET_CAR_TYPE_FAILURES);

export const getFeulType = actionCreator(types.GET_FUEL_TYPE);
export const getFeulTypeSuccess = actionCreator(types.GET_FUEL_TYPE_SUCCESS);
export const getFeulTypeFailure = actionCreator(types.GET_FUEL_TYPE_FAILURES);

export const getVarient = actionCreator(types.GET_VARIENT);
export const getVarientSuccess = actionCreator(types.GET_VARIENT_SUCCESS);
export const getVarientFailure = actionCreator(types.GET_VARIENT_FAILURES);
