import promiseMiddleware from 'redux-promise-middleware';

import appReducers from "./reducers" 

// composeStoreWithMiddleware = applyMiddleware(
//   promiseMiddleware(),
// )(createStore);

const store = createStore(
 
  applyMiddleware(
  	appReducers,
    middleware,
    promiseMiddleware()
  ),
);

export default store;