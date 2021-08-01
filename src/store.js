import {createStore} from "redux";
import favouritesReducer from './reducer';

const store = createStore(favouritesReducer);

export default store;