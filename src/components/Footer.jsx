import React from 'react';
import {
   GlobeAltIcon,
   MapIcon,
   LockClosedIcon,
   LinkIcon
   
    
  } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <div className='bg-black py-32 mt-32 text-white'>
            <div className='my-container  pb-8   text-center'>
                    <h1 className='flex gap-4 justify-center items-center lg:text-5xl md:text-5xl sm:text-xl font-extrabold mb-4 '>Explore <LinkIcon className='h-6 w-6 text-blue-500 text-4xl' /> Glass-door</h1>
                    <p className='text-xs md:text-base lg:text-base text-slate-400'>Millions of people are searching for jobs, salary information, company reviews, and interview questions. See what others are looking for on Glassdoor today.</p>
           </div>
        <div className='my-container lg:text-left grid grid-cols-2 gap-6 mb-8  lg:grid-cols-4 text-center '>
         
           <div className='flex flex-col'>
            <h4 className='font-extrabold my-2'>Glass-door</h4>
                <Link className='text-slate-400' >Guides</Link>
                <Link className='text-slate-400'>About / Press</Link>
                <Link className='text-slate-400'>Blog</Link>
           </div>
           <div className='flex flex-col'>
            <h4 className='font-extrabold my-2'>Employers</h4>
            <Link className='text-slate-400'>Account</Link>
            <Link className='text-slate-400'>Employer</Link>
            <Link className='text-slate-400'>Post a Job</Link>

           </div>
           <div className='flex flex-col'>
            <h4 className='font-extrabold my-2'>Community</h4>
            <Link className='text-slate-400'>CommunityHelp / Contact Us</Link>
            <Link className='text-slate-400'>Privacy Center</Link>
            <Link className='text-slate-400'>Information</Link>
            
           </div>
           <div className='flex flex-col'>
                <h4 className='font-extrabold my-2'>Work With Us</h4>
                <Link className='text-slate-400'>Advertisers</Link>
                <Link className='text-slate-400'>Developers</Link>
                <Link className='text-slate-400'>Careers</Link>
           </div>
        </div>
        <hr className='my-container' />
        <div className='flex sm:text-center pt-5 justify-between my-container'>
            <p className='text-xs md:text-base lg:text-base text-slate-400'>@2023 Glass-door. All Rights Reserved</p>
        
            <div className='flex lg:justify-between sm:justify-center gap-4 '>
            <Link><GlobeAltIcon className='h-6 w-6 text-white' /></Link>
            <Link><MapIcon className='h-6 w-6 text-red-500' /></Link>
            <Link><LockClosedIcon className='h-6 w-6 text-blue-500' /></Link>
            </div>
            <p className='text-xs md:text-base lg:text-base text-slate-400'>Powered by Glass-door</p>
        </div>
        </div>
    );
};

export default Footer;