import React, { useContext, useState } from 'react';
import { JobContext } from '../../../App';
import FeaturedJobCard from '../FeaturedJobCard/FeaturedJobCard';

const FeaturedJobs = () => {
    const featuresJobs = useContext(JobContext);
const [showAll, setShowAll] = useState(false)

    const handleShowAll =() =>{
        setShowAll(true)
    }
    return (
        <div>
            <div className='text-center mt-32'> 
                <h1 className='lg:text-5xl md:text-5xl sm:text-xl font-extrabold mb-4 '>Featured Jobs</h1>
                <p className='text-xs md:text-base lg:text-base'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            
           <div className='my-container grid gap-6  mt-8 md:grid-cols-2 '>
           {
                featuresJobs.slice(0,showAll ? 6 : 4).map((featureJob,index)=><FeaturedJobCard 
                featureJob={featureJob}
                key={index}
              
                />)
            }
           </div>
           <div className='flex justify-center'>
          {!showAll && <span onClick={handleShowAll}>

         <button  className=' mt-10  my-btn bg-sky-600'>See More</button>
         </span>}
           </div>
            
        </div>
    );
};

export default FeaturedJobs;