
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: 'persist-key',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const store = createStore(
    persistedReducer,
    composeEnhancers( applyMiddleware( thunk )  )  );
export const persistor = persistStore(store);