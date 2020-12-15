import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {SocketProvider} from 'socket.io-react';
import io from 'socket.io-client';

const socket = io("http://127.0.0.1:5000");
socket.on('connect', conn => console.log("comm"));

ReactDOM.render(
  <BrowserRouter>
    <SocketProvider socket={socket}>
      <App />
    </SocketProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
