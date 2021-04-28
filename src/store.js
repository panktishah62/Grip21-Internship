import { createStore } from "redux";
import { composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./reducers"
const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  }; 
  const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch {
      // ignore write errors
    }
  };
  
  
  const store = createStore( rootReducer,loadState());
  store.subscribe(() => {
    saveState(
      store.getState())
    });
  
  export default store;