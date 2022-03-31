import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/index.sass'
import { FirebaseAppProvider} from 'reactfire'
import firebaseConfig from "./firebase/firebaseConfig"
ReactDOM.render(

  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
    </FirebaseAppProvider>
  </React.StrictMode>,

  document.getElementById('root')
);

