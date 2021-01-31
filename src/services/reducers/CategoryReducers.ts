import {
  ICategoryInterface,
  CATEGORIES_FAIL,
  CATEGORIES_LOADING,
  CATEGORIES_SUCCESS,
  CategoryDispatchTypes,
} from "../actions/CategoryActionTypes";

interface DefaultStateI {
  loading?: boolean,
  categories?: ICategoryInterface[],
  error?: string,
}

const defaultState: DefaultStateI = {
  loading: false,
  categories: [],
  error: '',
};

const categoriesReducer = (state: DefaultStateI = defaultState, action: CategoryDispatchTypes) : DefaultStateI => {
  switch (action.type) {
    case CATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case CATEGORIES_LOADING:
      return {
        ...state,
        error: '',
        loading: true,
      };
    case CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        categories: action.payload,
      };
    default:
      return state;
  }
}

export default categoriesReducer;
