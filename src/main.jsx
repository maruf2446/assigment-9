import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Main from './Components/Laout/Main';
import JobList from './Components/JobList/JobList';
import DreamJob from './Components/DreamJob/DreamJob';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
        loader: () => fetch('Fake-Data.json')
      },
      {
        path:'/',
        element: <JobList></JobList>
      },
      {
        path:'/',
        element: <DreamJob></DreamJob>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
