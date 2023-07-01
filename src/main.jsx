import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Routes/Router';
import { RouterProvider } from 'react-router-dom';
import AuthProviders from './Providers/AuthProvider';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <div>
        <RouterProvider router={router} />
      </div>
    </AuthProviders>
  </React.StrictMode>
);
