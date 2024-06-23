import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Categories from './Component/Categories/Categories.jsx';
import Areas from './Component/Areas/Areas.jsx';
import Ingredients from './Component/Ingredients/Ingredients.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/categories",
        loader: () => fetch('www.themealdb.com/api/json/v1/1/categories.php'),
        element: <Categories></Categories>
      },
      {
        path: "/areas",
        loader: () => fetch('www.themealdb.com/api/json/v1/1/list.php?a=list'),
        element: <Areas></Areas>
      },
      {
        path: "/ingredients",
        element: <Ingredients></Ingredients>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
