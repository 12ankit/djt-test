import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import reducer from "./reducer";

// log every action to see what's happening behind the scenes.
const logger = createLogger({ collapsed: true });

const composeEnhancers =
  (typeof window !== "undefined" &&
    process.env.NODE_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reduxMiddleware = composeEnhancers(applyMiddleware(logger));

const store = createStore(reducer, reduxMiddleware);

export default store;

// console.log(store.getState())
