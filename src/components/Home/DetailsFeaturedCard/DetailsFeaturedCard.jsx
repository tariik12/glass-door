import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../../assets/fakebd';
import {
    MapPinIcon,
    CurrencyDollarIcon,
    PhoneIcon,
    EnvelopeIcon,
    NewspaperIcon
  } from '@heroicons/react/24/solid'
  


const DetailsFeaturedCard = () => {
    const data = useLoaderData()
    const { id } = useParams();
    const detailsFeaturedCard = data.find(product =>product.id == id)
    const { company_name, con_info_email, con_info_phone, educational_requirements, experiences,fulltime_part_time, job_description, job_responsibility, job_title, location, rem_onsite_job, salary,company_picture} =detailsFeaturedCard ;
    
    return (
        <div>
            <h1 className='bg-purple-50 text-5xl text-center py-32'>View Details</h1>
             <div className='grid md:grid-cols-2  gap-14 my-container mt-32'>
        <div className=' rounded-lg p-10 '>
            <p><strong>Job Description :</strong> {job_description}</p>
            <p className='my-6'><strong>Job Responsibility:</strong>{job_responsibility}</p>
            <p> <strong>Educational Requirements:</strong>  <br /> <br />{educational_requirements}</p> <br />
            <p><strong>Experiences:</strong> <br /> <br />{experiences}</p>
        </div>
<div className=' w-3/4  '>
    <div className='border rounded-lg p-10 bg-purple-100'>
    <h4 className='font-extrabold'>Job Details</h4>
    <hr className='my-6' />
      
    <p className='flex gap-1'> <CurrencyDollarIcon className='w-5 me-1' /><strong>Salary:</strong> {salary}</p>
    <p className='mt-4 flex gap-1'> <NewspaperIcon className='w-5 me-1' /><strong>JOb Title:</strong>  {job_title}</p>
    <h4 className='my-8 font-extrabold'>Contact Information</h4>
    <hr className=''/>
    <p className='mt-6 mb-4 flex gap-1'> <PhoneIcon className='w-5 me-1 '  /><strong>Phone:</strong> {con_info_phone}</p>
    <p className='flex gap-1'><EnvelopeIcon className='w-5 me-1' /> <strong>Email:</strong> {con_info_email}</p>
    <p className='mt-4 flex gap-1'><MapPinIcon className='w-5 me-1 '  /><strong >Address:</strong> {location}</p>
    </div>

    <div className='mt-6'>
                <button onClick={()=>addToDb({id,job_title,company_name,fulltime_part_time,location,salary,rem_onsite_job,company_picture})} className='my-btn w-full'>Apply Now</button>
            </div>
</div>


            </div>
        </div>
    );
};

export default DetailsFeaturedCard;