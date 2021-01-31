import {
  ICatInterface,
  CATS_FAIL,
  CATS_LOADING,
  CATS_SUCCESS,
  LOAD_MORE_CATS,
  CatsDispatchTypes,
} from "../actions/CatsActionTypes";

interface DefaultStateI {
  loading: boolean,
  cats?: ICatInterface[],
  error?: string,
}

const defaultState: DefaultStateI = {
  loading: false,
  cats: [],
  error: '',
};

const catsReducer = (state: DefaultStateI = defaultState, action: CatsDispatchTypes) : DefaultStateI => {
  switch (action.type) {
    case CATS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case CATS_LOADING:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case CATS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        cats: action.payload,
      };
    case LOAD_MORE_CATS:
      const pld = action.payload || [];
      return {
        loading: false,
        error: '',
        cats: state.cats?.concat(pld),
      };
    default:
      return state;
  }
}

export default catsReducer;
