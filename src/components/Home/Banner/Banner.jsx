import React from 'react';

const Banner = () => {

    return (
        <div>
            <div className='bg-purple-50'>
            <div className='flex  justify-between items-center pt-10 my-container bg-purple-50 '>
            <div className='lg:pb-32 md:pb-32 '>
            <div className=' sm:text-xl md:text-3xl lg:text-5xl  w-auto font-extrabold tracking-wide'>
                <h2 className=''>One Step</h2> <h2 className='lg:pt-2 md:pt-2 '>Closer To You</h2>
                 <h2 className='text-blue-500'>Dream Job</h2>
            </div>
            <p className=' lg:mt-6 md:mt-6  sm:text-xs  md:text-base lg:text-base'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. <br /> Manage all  your job application from start to finish.</p>
            <button className="my-btn lg:mt-8 md:mt-8">Get Started</button>
            </div>
            <div className= 'flex justify-end'>
                <img  className=' w-96 rounded  ' src="https://imagizer.imageshack.com/img924/4374/aQnXfl.jpg" alt="" />
            </div>
        </div>
        </div>

        </div>
    );
};

export default Banner;

