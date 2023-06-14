import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
import { userLoginReducer } from "./reducers/userReducers";
import { noteCreateReducer, noteListReducer } from "./reducers/noteReducer";

const reducer=combineReducers({
    userLogin:userLoginReducer,
    noteList:noteListReducer,
    noteCreate:noteCreateReducer
});

const initialState={};


const store=createStore(reducer,initialState,
    composeWithDevTools(applyMiddleware(thunk)));
export default store;