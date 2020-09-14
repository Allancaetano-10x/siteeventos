import React from 'react';
import{BrowserRouter as Router, Route} from 'react-router-dom'
import {store, persistente} from '../src/store/index'
import {Provider} from 'react-redux'
import {persistGate} from 'redux-persist/integration/react'

//import das páginas
import Login from './view/login/login'
import Cadastro from './view/cadastro/cadastro'
import Home from './view/home/home'
import Recuperar from './view/recuperar/recuperar'
import EventoCadastro from './view/evento-cadastro/evento-cadastro'
import { PersistGate } from 'redux-persist/lib/integration/react';

function App() {
  return (
    <Provider store = {store}>
      <PersistGate loading={null} persistor={persistente}>
      <Router>
        <Route exact path = '/' component = {Home} />
        <Route path = '/eventos/:parametro' component = {Home} />
        <Route exact path = '/cadastro' component = {Cadastro} />  
        <Route exact path = '/login' component = {Login} />
        <Route exact path = '/recuperar' component = {Recuperar} />  
        <Route exact path = '/evento-cadastro' component = {EventoCadastro} />  
      </Router>
      </PersistGate>
    </Provider>   
  )
}

export default App
