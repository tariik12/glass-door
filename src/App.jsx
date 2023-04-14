import React, { createContext } from 'react';
import Header from './components/Header';
import { Outlet, useLoaderData, } from 'react-router-dom';
import Footer from './components/Footer';

export const JobContext = createContext([])
const App = () => {
  const jobFeaturedData = useLoaderData()
  
  return (
    <div>  
      <JobContext.Provider value={jobFeaturedData}>
      <Header />
      <Outlet />
      <Footer/>
      </JobContext.Provider>
      
    </div>
  );
};

export default App;