import React from 'react';
import { Link,  } from 'react-router-dom';
import {
  MapPinIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/solid'




const FeaturedJobCard = ({featureJob,}) => {

    const {company_logo, company_name, con_info_email, con_info_phone, educational_requirements, experiences,fulltime_part_time, id, job_description, job_responsibility, job_title, location, rem_onsite_job, salary} =featureJob;
    return (
        <div className='border px-10 rounded-md p-2 '>
        
          <img className='mt-9 rounded border border-purple-200 ' src={company_logo} alt="company logo" />
          <h1 className='pt-6 font-extrabold'>{job_title}</h1>
          <p className='mt-2 mb-4'>{company_name}</p>
          <button className='border border-purple-200  text-purple-500 p-1'>{rem_onsite_job}</button>
          <button className='border border-purple-200 ms-1 text-purple-500 p-1'>{fulltime_part_time}</button>
            <div className='flex mt-2 mb-6 '>
            <MapPinIcon className='w-5 me-1 '  />
            <p className=' me-1'> {location}</p>
            <CurrencyDollarIcon className='w-5 me-1' />
            <p className=''>{salary}</p>
            </div>
         
          
          <Link to={`detailsFeaturedCard/${id}`}>
          <button  className='my-btn '>View Details</button>
          </Link>
      
        </div>
    );
};
// onClick={()=>handleViewDetails(id)}
export default FeaturedJobCard;