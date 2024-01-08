import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";

export function configureStore() {

  const store = createStore(
    rootReducer
  );

  return store;
}
