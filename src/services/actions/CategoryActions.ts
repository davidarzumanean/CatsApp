import { Dispatch } from "redux";
import axios from "axios";
import {
  CATEGORIES_FAIL,
  CATEGORIES_LOADING,
  CATEGORIES_SUCCESS,
  CategoryDispatchTypes,
} from "./CategoryActionTypes";

export const GetCategories = () => async (dispatch: Dispatch<CategoryDispatchTypes>) => {
  try {
    dispatch({
      type: CATEGORIES_LOADING,
    });

    const res = await axios.get(`${process.env.REACT_APP_API_URL}/categories`);

    dispatch({
      type: CATEGORIES_SUCCESS,
      payload: res.data,
    })
  } catch (e) {
    dispatch({
      type: CATEGORIES_FAIL,
      error: e.data.message,
    })
  }
}
