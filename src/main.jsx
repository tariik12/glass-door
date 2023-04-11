import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "@fontsource/manrope";
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './components/Blog';
import Statistics from './components/Statistics';
import AppliedJobs from './components/AppliedJobs';
import Home from './components/Home/Home';
import ErrorPage from './components/Errorpage';
import DetailsFeaturedCard from './components/Home/DetailsFeaturedCard/DetailsFeaturedCard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader:() =>  fetch('/featuredJobs.json'),
    errorElement:<ErrorPage />,
    children:[
      {
        path:'/',
        element:<Home />,
        loader:() => fetch('/jobCategory.json'), 
      },
     
     
      {
        path:'/blog',
        element:<Blog />
      },
      {
        path:'/statistics',
        element:<Statistics />
      },

      {
        path:'detailsFeaturedCard/:id',
        element: <DetailsFeaturedCard />,
        loader:({params}) => fetch("/featuredJobs.json")
      },
      {
        path:'/applied_job',
        element:<AppliedJobs />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
