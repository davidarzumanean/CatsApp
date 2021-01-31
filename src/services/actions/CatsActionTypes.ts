export const CATS_LOADING = "CATS_LOADING";
export const CATS_FAIL = "CATS_FAIL";
export const CATS_SUCCESS = "CATS_SUCCESS";
export const LOAD_MORE_CATS = "LOAD_MORE_CATS";

export interface CatsLoading {
  type: typeof CATS_LOADING,
}
export interface CatsFail {
  type: typeof CATS_FAIL,
  error: string,
}
export interface CatsSuccess {
  type: typeof CATS_SUCCESS,
  payload?: ICatInterface[]
}
export interface LoadMoreCats {
  type: typeof LOAD_MORE_CATS,
  payload?: ICatInterface[]
}

export interface ICatInterface {
  breeds: [],
  id: string,
  url: string,
  width: number,
  height: number,
}

export type CatsDispatchTypes = CatsLoading | CatsFail | CatsSuccess | LoadMoreCats;
