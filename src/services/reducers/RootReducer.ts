import { combineReducers } from "redux";
import catsReducer from "./CatsReducer";
import categoriesReducer from "./CategoryReducers";

const RootReducer = combineReducers({
  cats: catsReducer,
  categories: categoriesReducer,
});

export default RootReducer;
