import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { store } from './store/configureStore';
import { Provider } from 'react-redux';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 <Provider store={store}>
    <AuthProvider >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
 </Provider>
 
 
);


