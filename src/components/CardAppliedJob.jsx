import React from 'react';


const CardAppliedJob = ({save}) => {
    const {company_picture,job_title,company_logo,company_name,rem_onsite_job,fulltime_part_time,location,salary}=save
    return (
        <div className='my-container border'>
            <img src={company_picture} alt="" />
       <p>{job_title}</p>
       <p>{company_logo}</p>
       <p>{company_name}</p>
       <p>{rem_onsite_job}</p>
       <p>{fulltime_part_time}</p>
       <p>{location}</p>
       <p>{salary}</p>
      
        </div>
    );
};

export default CardAppliedJob;