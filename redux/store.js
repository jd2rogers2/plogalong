import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

import { getPlogs } from '../firebase/plogs';
import { onAuthStateChanged } from '../firebase/auth';

import { updatePlogs, setCurrentUser } from './actions';
import FirebaseMiddleware from './firebase-middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      FirebaseMiddleware,
      thunk
    )
  )
);

getPlogs().then(
  (plogs) => {
    store.dispatch(
      updatePlogs(plogs)
    )
  }
);

onAuthStateChanged(
  (user) => {
      console.log('onAuthStateChanged', user);
    store.dispatch(
      setCurrentUser(
        user === null ?
          null :
          user.toJSON()
      )
    );  
  }
);

export default store;
