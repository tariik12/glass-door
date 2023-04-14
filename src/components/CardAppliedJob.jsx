import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPinIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/solid'


const CardAppliedJob = ({save}) => {
    const {company_picture,job_title,company_logo,company_name,rem_onsite_job,fulltime_part_time,location,salary}=save
    return (
        <div className=' my-container p-5 border flex justify-between items-center'>
         <div className='flex items-center gap-2'>
         <div>
          <img className='rounded-lg' src={company_picture} alt="" />
          </div>
       <div className='text-start w-100'>
       <h4 className='font-extrabold '>{job_title}</h4>
       <p className='mt-2 mb-4'>{company_name}</p>
      <div className='flex gap-2 '>
      <p className='border rounded p-1'>{rem_onsite_job}</p>
       <p className='border rounded p-1'>{fulltime_part_time}</p>
      </div>
      <div className='flex mt-2 mb-6 '>
            <MapPinIcon className='w-5 me-1 '  />
            <p className=' me-1'> {location}</p>
            <CurrencyDollarIcon className='w-5 me-1' />
            <p className=''>{salary}</p>
            </div>
       </div>
         </div>
       <div className=''>
        <Link to='/'><button className='my-btn' >View Details</button></Link>
       </div>
      
        </div>
    );
};

export default CardAppliedJob;