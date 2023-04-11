import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../../assets/fakebd';


const DetailsFeaturedCard = () => {
    const data = useLoaderData()
    const { id } = useParams();
    const detailsFeaturedCard = data.find(product =>product.id == id)
    const {company_logo, company_name, con_info_email, con_info_phone, educational_requirements, experiences,fulltime_part_time, job_description, job_responsibility, job_title, location, remote_onsite, salary} =detailsFeaturedCard ;
    return (
        <div className='my-container'>
            <h1>Job Details</h1>
            <div>
<p>{job_description}</p>
<p>{job_responsibility}</p>
<p>{educational_requirements}</p>
<p>{experiences}</p>
<div>
    <p>{salary}</p>
    <p>{job_title}</p>
    <h1>Contact Information</h1>
    <p>{con_info_phone}</p>
    <p>{con_info_email}</p>
    <p>{location}</p>
</div>
            </div>
            <div className='flex justify-center'>
                <button onClick={()=>addToDb({id,job_title,company_logo,company_name,remote_onsite,fulltime_part_time,location,salary,remote_onsite})} className='btn'>Apply Now</button>
            </div>
        </div>
    );
};

export default DetailsFeaturedCard;