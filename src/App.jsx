import React, { createContext } from 'react';
import Header from './components/Header';
import { Outlet, useLoaderData, } from 'react-router-dom';
import Footer from './components/Footer';
import { getShoppingCart } from './assets/fakebd';

export const ProductContext = createContext({})
export const JobContext = createContext([])
const App = () => {
  const jobFeaturedData = useLoaderData()
  const shop =getShoppingCart();
  
  return (
    <div>
      <ProductContext.Provider value={ shop}>
      <JobContext.Provider value={jobFeaturedData}>
      <Header />
      <Outlet />
      <Footer/>
      </JobContext.Provider>
      </ProductContext.Provider>
      
    </div>
  );
};

export default App;