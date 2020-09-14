import { createStore } from 'redux'
import usuarioReducer from './usuarioReducer'
import {persistReducer, persistStore} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'siteeventos',
    storage,

}

const persistedReducer = persistReducer(persistConfig, usuarioReducer)

const store = createStore(persistedReducer);
const persistente = persistStore(store)

export {store, persistente}
 