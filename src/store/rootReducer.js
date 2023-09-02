import { combineReducers, Reducer, ReducersMapObject } from "redux";
import commonSlice from "./commonSlice/ducks"

export default function rootReducer(){
    const reducerMap={
        common:commonSlice
    }
    return combineReducers(reducerMap);
}