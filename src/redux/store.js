import { combineReducers, compose, legacy_createStore } from "redux";
import marketReducer from './marketReducer';
 
const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  
export default function configureStore() {
  return legacy_createStore(
    combineReducers({
      market: marketReducer,
    }),
    undefined,
    compose(
      ReactReduxDevTools,
    )
  );
}
