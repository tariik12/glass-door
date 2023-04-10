import React from 'react';
import Job from '../Job';


const JobCategory = ({jobCategories}) => {
    return (

        <div className='my-container'>
        <div className='text-center'>
        <h1>Job Category List</h1>
         <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
         <div className='grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2'>
            {
                jobCategories.map(jb=><Job jb={jb} />)
            }
         
     </div>
     </div>
    );
};

export default JobCategory;