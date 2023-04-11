import React from 'react';
import { Link,  } from 'react-router-dom';


const FeaturedJobCard = ({featureJob,}) => {
  console.log(featureJob)
    const {company_logo, company_name, con_info_email, con_info_phone, educational_requirements, experiences,fulltime_part_time, id, job_description, job_responsibility, job_title, location, remote_onsite, salary} =featureJob;
    return (
        <div className='border p-5'>
        
          <img src={company_logo} alt="company logo" />
          <h1>{job_title}</h1>
          <button>{remote_onsite}</button>
          <button>{fulltime_part_time}</button>
          <p>{location}</p>
          <p>{salary}</p>
          <Link to={`detailsFeaturedCard/${id}`}>
          <button  className='btn bg-sky-600'>View Details</button>
          </Link>
      
        </div>
    );
};
// onClick={()=>handleViewDetails(id)}
export default FeaturedJobCard;