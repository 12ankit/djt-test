import * as types from "./actionTypes";
import axios from "axios";

const carApi =
  "http://api.stargroupindia.org/api/Vehicle/GetVehiclesByType?type=Car";
const fuelApi =
  "http://api.stargroupindia.org/api/Vehicle/GetFuelByVehicleID/154";
const varientApi =
  "http://api.stargroupindia.org/api/Vehicle/GetVariantsByVehicleAndFuel?VehicleID=443&amp;FuelID=101";

const actionAPICaller = (
  type,
  successType,
  errorType,
  api
) => params => dispatch => {
  dispatch({ type });
  axios
    .get(api)
    .then(response => {
      dispatch({ type: successType, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: errorType, error });
    });
};

export const getCartType = actionAPICaller(
  types.GET_CAR_TYPE,
  types.GET_CAR_TYPE_SUCCESS,
  types.GET_CAR_TYPE_FAILURES,
  carApi
);

export const getFeulType = actionAPICaller(
  types.GET_FUEL_TYPE,
  types.GET_FUEL_TYPE_SUCCESS,
  types.GET_FUEL_TYPE_FAILURES,
  fuelApi
);

export const getVarient = actionAPICaller(
  types.GET_VARIENT,
  types.GET_VARIENT_SUCCESS,
  types.GET_VARIENT_FAILURES,
  varientApi
);
