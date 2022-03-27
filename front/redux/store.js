import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducers from './reducers/root.reducer';

export default createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);