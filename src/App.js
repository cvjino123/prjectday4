import React, { useEffect, useState } from 'react'
import './App.css';
import Home from './components/Home'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Product from './components/Product';
import Productpage from './components/Productpage';
import ErrorPage from './components/ErrorPage';
import RootLayout from './components/RootLayout';
import ProductDetailPage from './components/ProductDetailPage';


function App() {
  const router  = createBrowserRouter([
    {
      path: "/",
      element:<RootLayout/>,
      errorElement:<ErrorPage/>,
      children:[
    {path:"/",element:<Home/>},
    {path:"/product", element:<Product/>},
    {path:"/product/:productId", element:<ProductDetailPage/>}
    
      ]
    }
  ])

   return (
     <div className="App">
   
    <RouterProvider router={router}/>
   
    
     </div>
   );
 
}

export default App;
