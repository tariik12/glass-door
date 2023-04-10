import React from 'react';
import {
   GlobeAltIcon,
   MapIcon,
   LockClosedIcon
    
  } from '@heroicons/react/24/solid'

const Footer = () => {
    return (

        <div className='bg-black text-white'>
            <div className='my-container   text-center'>
                    <h1>Explore Glass-door</h1>
                    <p>Millions of people are searching for jobs, salary information, company reviews, and interview questions. See what others are looking for on Glassdoor today.</p>
           </div>
        <div className='my-container grid gap-6 mb-8 lg:grid-cols-4 sm:text-center '>
         
           <div>
            <h4>Glassdoor</h4>
                <p>Guides</p>
                <p>About / Press</p>
                <p>Blog</p>
           </div>
           <div>
            <h4>Employers</h4>
            <p>Account</p>
            <p>Employer</p>
            <p>Post a Job</p>

           </div>
           <div>
            <h4>Community</h4>
            <p>CommunityHelp / Contact Us</p>
            <p>Privacy Center</p>
            <p>Information</p>
            
           </div>
           <div>
                <h4>Work With Us</h4>
                <p>Advertisers</p>
                <p>Developers</p>
                <p>Careers</p>
           </div>
        </div>
        <hr className='my-container' />
        <div className='lg:flex sm:text-center justify-between my-container'>
            <p>@2023 CareerHub. All Rights Reserved</p>
        
            <div className='flex lg:justify-between sm:justify-center gap-4 '>
            <GlobeAltIcon className='h-6 w-6 text-white' />
            <MapIcon className='h-6 w-6 text-red-500' />
            <LockClosedIcon className='h-6 w-6 text-blue-500' />
            </div>
            <p>Powered by CareerHub</p>
        </div>
        </div>
    );
};

export default Footer;