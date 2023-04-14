import React from 'react';
import { Link } from 'react-router-dom';


const CardAppliedJob = ({save}) => {
    const {company_picture,job_title,company_logo,company_name,rem_onsite_job,fulltime_part_time,location,salary}=save
    return (
        <div className='my-container border flex items-center'>
          <div>
          <img src={company_picture} alt="" />
          </div>
       <div>
       <p>{job_title}</p>
       <p>{company_logo}</p>
       <p>{company_name}</p>
       <p>{rem_onsite_job}</p>
       <p>{fulltime_part_time}</p>
       <p>{location}</p>
       <p>{salary}</p>
       </div>
       <div className=''>
        <Link to='/'><button className='my-btn' >View Details</button></Link>
       </div>
      
        </div>
    );
};

export default CardAppliedJob;