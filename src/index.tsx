import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world! <br/> <Link to="/about">About</Link></div>,
    },
    {
        path: "/about",
        element: <div>Hello world!<br/> <Link to="/">Main</Link></div>,
    },
    {
        path: "*",
        element: <div>404<br/> <Link to="/">Main</Link></div>,
    },
]);

root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
