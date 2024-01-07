import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import {thunk} from "redux-thunk"; // Örnek olarak Redux Thunk middleware kullanımı

export function configureStore() {
  const middlewares = [thunk]; // Kullanılacak middleware'leri buraya ekleyebilirsiniz

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return store;
}
