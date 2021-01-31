import {Dispatch} from "redux";
import axios from "axios";
import {
  CATS_FAIL,
  CATS_LOADING,
  CATS_SUCCESS,
  CatsDispatchTypes, LOAD_MORE_CATS,
} from "./CatsActionTypes";

export const GetCats = (page: number = 1, perPage: number = 10, categoryId: string = '') => async (dispatch: Dispatch<CatsDispatchTypes>) => {
  try {
    dispatch({
      type: CATS_LOADING,
    });

    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/images/search?page=${page}&limit=${perPage}${
        categoryId ? `&category_ids=${categoryId}` : ''}`
    );

    dispatch({
      type: CATS_SUCCESS,
      payload: res.data,
    })
  } catch (e) {
    dispatch({
      type: CATS_FAIL,
      error: e.data.message,
    })
  }
}

export const LoadMoreCats = (page: number = 2, categoryId: string = '') => async (dispatch: Dispatch<CatsDispatchTypes>) => {
  try {
    const res = await axios.get(
      `https://api.thecatapi.com/v1/images/search?page=${page}&limit=10${
        categoryId ? `&category_ids=${categoryId}` : ''}`
    );

    dispatch({
      type: LOAD_MORE_CATS,
      payload: res.data,
    })
  } catch (e) {
    dispatch({
      type: CATS_FAIL,
      error: e.data.message,
    })
  }
}
