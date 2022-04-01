import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/index.sass'
import { FirebaseAppProvider} from 'reactfire'
import firebaseConfig from "./firebase/firebaseConfig"
import { Provider } from "react-redux";
import { store} from "./store/store";
ReactDOM.render(

  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Provider store={ store }>
    <App />
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,

  document.getElementById('root')
);

