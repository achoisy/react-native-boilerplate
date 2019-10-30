import {combineReducers} from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../sagas/';
import {reducer as ExampleReducer} from './example/Reducers';

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    example: ExampleReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
