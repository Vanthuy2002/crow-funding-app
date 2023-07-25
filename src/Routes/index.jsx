import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from 'src/Layout/Dashboard';
import LayoutCheckout from 'src/Layout/LayouCheckout';
import CheckoutPage from 'src/Pages/Checkout';
import Login from 'src/Pages/Login';
import Register from 'src/Pages/Register';
import Loading from 'src/components/Effect';

const Dashboard = React.lazy(() => import('src/Pages/Dashboard'));
const Campain = React.lazy(() => import('/src/Pages/Campain'));
const CreateCam = React.lazy(() => import('/src/Pages/CreateCam'));
const CampView = React.lazy(() => import('src/Pages/CampView'));
const ShippingPage = React.lazy(() => import('src/Pages/Shipping'));

const Routing = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='campain' element={<Campain />} />
          <Route path='campain/add' element={<CreateCam />} />
          <Route path='campain/:slug' element={<CampView />} />
        </Route>

        <Route element={<LayoutCheckout />}>
          <Route path='payment' element={<CheckoutPage />} />
          <Route path='ship' element={<ShippingPage />} />
        </Route>

        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;
