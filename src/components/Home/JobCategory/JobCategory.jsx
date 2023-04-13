import React from 'react';
import Job from '../Job';

const JobCategory = ({jobCategories}) => {
    return (
        <div>
            <div className='text-center mt-32 '>
                <h1 className='lg:text-5xl md:text-5xl sm:text-xl font-extrabold mb-4 '>Job Category List</h1>
                <p className='text-xs md:text-base lg:text-base'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div >
           <div className='mt-8 my-container grid grid-cols-2  lg:grid-cols-4  '>
           {
                jobCategories.map((JobCategory,index) =><Job JobCategory={JobCategory} key={index} />)
            }
           </div>
        </div>
    );
};

export default JobCategory;