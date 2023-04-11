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
            <div className='text-center'> 
                <h1>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
           <div className='my-container grid gap-8  mb-8 md:grid-cols-2  border'>
           {
                featuresJobs.slice(0,showAll ? 6 : 4).map((featureJob,index)=><FeaturedJobCard 
                featureJob={featureJob}
                key={index}
              
                />)
            }
           </div>
           <div className='flex justify-center'>
          {!showAll && <span onClick={handleShowAll}>

         <button  className='   btn bg-sky-600'>See More</button>
         </span>}
           </div>
            
        </div>
    );
};

export default FeaturedJobs;