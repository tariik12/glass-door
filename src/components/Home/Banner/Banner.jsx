import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='bg-purple-50'>
            <div className='flex justify-between items-center mt-40 my-container bg-purple-50 '>
            <div className=''>
            <h3 className='text-6xl font-bold tracking-wide'>One Step <br /> Closer To Your <br /> <span className='text-blue-500'>Dream Job</span></h3>
            <p className='mt-12'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
            <button className="btn btn-primary mt-16">Get Started</button>
            </div>
            <div className= 'flex justify-end'>
                <img  className=' w-3/4   ' src="P3OLGJ1 copy 1.png" alt="" />
            </div>
        </div>
        </div>

        </div>
    );
};

export default Banner;

