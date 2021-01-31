import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expect from 'expect'
import * as actions from '../actions/CategoryActions'
import {
  CATEGORIES_FAIL,
  CATEGORIES_LOADING,
  CATEGORIES_SUCCESS,
} from "../actions/CategoryActionTypes";

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Categories load actions', () => {
  it('creates CATEGORIES_SUCCESS when fetching categories has been done', () => {
    const expectedActions = [
      { type: CATEGORIES_LOADING },
      {
        type: CATEGORIES_SUCCESS,
        payload: [{"id":5,"name":"boxes"},{"id":15,"name":"clothes"},{"id":1,"name":"hats"},{"id":14,"name":"sinks"},{"id":2,"name":"space"},{"id":4,"name":"sunglasses"},{"id":7,"name":"ties"}],
      }
    ]
    const store = mockStore({
      loading: false,
      categories: [],
      error: '',
    })

    // @ts-ignore
    return store.dispatch(actions.GetCategories()).then(() => {
      expect(store.getActions()).toMatchObject(expectedActions)
    })
  })
  it('creates CATEGORIES_FAIL when fetching cats failed', () => {

  })
})