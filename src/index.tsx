import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./presentation/pages/Home/Home";
import { ThemeProvider } from '@mui/material';
import theme from './presentation/styles/theme';
import SignIn from './presentation/pages/SignIn/SignIn';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/sign-in',
    element: <SignIn />
  }
]);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>
);
