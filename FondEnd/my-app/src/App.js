import React from 'react';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './App.css';
import SignIn from './signin/SignIn';
import Home from './components/Home';
import Daychuyen from './components/Vongco';
import Lactay from './components/Lactay';
import Bongtai from './components/Bongtai';
import Nhan from './components/Nhan';
import Cart from './components/Cart';
import DetailBongtai from './detail/DetailBongtai';
import DetailLactay from './detail/DetailLactay';
import DetailNhan from './detail/DetailNhan';
import DetailVongco from './detail/DetailVongco';
import AboutUs from './components/AboutUs';
import Buynow from './components/Buynow';
import Steps from './components/Steps';
import DathangCom from './components/DathangCom';

const router = createBrowserRouter([
  {
    path:"/",
    element: <SignIn/>,
    
  },
  {
    path:"/trangchu",
    element: <Home/>,
    
  },
  {
    path:"/lactay",
    element: <Lactay />
  },
  {
    path:"/vongco",
    element: <Daychuyen />
  },
  {
    path:"/bongtai",
    element: <Bongtai />
  },
  {
    path:"/nhan",
    element: <Nhan />
  },
  {
    path:"/gioithieu",
    element: <AboutUs />
  },
  {
    path: '/detail_bongtai/:detailId',
    element: <DetailBongtai />,
  },
  {
    path: '/detail_lactay/:detailId',
    element: <DetailLactay />,
  },
  {
    path: '/detail_nhan/:detailId',
    element: <DetailNhan />,
  },
  {
    path: '/detail_vongco/:detailId',
    element: <DetailVongco />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/muangay',
    element: <Buynow/>,
  },
  {
    path: '/dathang',
    element: <DathangCom/>,
  },
  {
    path: '/donhang',
    element: <Steps />,
  },
])

function App() {
  return (
    <RouterProvider router={router} />
   
  );
}

export default App;
