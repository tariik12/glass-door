import React from 'react';

const CardAppliedJob = ({save}) => {
    const {id,job_title,company_logo,company_name,remote_onsite,fulltime_part_time,location,salary}=save
    return (
        <div className='my-container border'>
       <p>{job_title}</p>
       <p>{company_logo}</p>
       <p>{company_name}</p>
       <p>{remote_onsite}</p>
       <p>{fulltime_part_time}</p>
       <p>{location}</p>
       <p>{salary}</p>
      
        </div>
    );
};

export default CardAppliedJob;