import React from 'react';

const Job = ({JobCategory}) => {
    const {category,description,picture} = JobCategory;
    return (
        <div className='bg-purple-50 border p-6 w-3/4  rounded-lg m-5'>
            <img className='bg-purple-100 p-4 rounded-lg' src={picture} alt="" />
            <h2 className='pt-8 pb-2 font-extrabold '>{category}</h2>
            <p className='text-neutral-400'>{description}</p>
        </div>
    );
};

export default Job;