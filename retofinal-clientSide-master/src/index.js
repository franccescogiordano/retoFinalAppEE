import React from 'react';
import ReactDOM from 'react-dom';
import {AppRoutes} from './routes/AppRoutes'
import './assets/styles/index.sass'
import { FirebaseAppProvider} from 'reactfire'
import firebaseConfig from "./firebase/firebaseConfig"
import { Provider } from "react-redux";
import { store} from "./store/store";
ReactDOM.render(

  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Provider store={ store }>
    <AppRoutes />
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,

  document.getElementById('root')
);

