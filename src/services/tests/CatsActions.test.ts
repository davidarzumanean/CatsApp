import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expect from 'expect'
import * as actions from '../actions/CatsActions'
import {
  CATS_FAIL,
  CATS_LOADING,
  CATS_SUCCESS,
} from "../actions/CatsActionTypes";

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Cat image load actions', () => {
  it('creates CATS_SUCCESS when fetching cats has been done', () => {
    const expectedActions = [
      { type: CATS_LOADING },
      {
        type: CATS_SUCCESS,
        payload: [{
          id: expect.any(String),
          url: expect.any(String),
          breeds: expect.any(Array),
          height: expect.any(Number),
          width: expect.any(Number),
        }],
      }
    ]
    const store = mockStore({
      loading: false,
      cats: [],
      error: '',
    })

    // @ts-ignore
    return store.dispatch(actions.GetCats(1, 1)).then(() => {
      expect(store.getActions()).toMatchObject(expectedActions)
    })
  })
  it('creates CATS_FAIL when fetching cats failed', () => {

  })
})