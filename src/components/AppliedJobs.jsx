import React, { useState } from 'react';
import  {  useContext } from 'react';
import {ProductContext } from '../App';
import CardAppliedJob from './CardAppliedJob';
    import { getShoppingCart } from '../assets/fakebd';
import { toast } from 'react-hot-toast';


const AppliedJobs = () => {
    const saveData =useContext(ProductContext)
    console.log(saveData)
    console.log(saveData)
        const [data,setData] = useState(saveData)
    const handleData =(id)=>{
            const k = saveData.filter(f =>f.rem_onsite_job === id)
            setData(k)
    }
    const remoteData =(id)=>{
            const k = saveData.filter(f =>f.rem_onsite_job === id)
            setData(k)
    }
    return (
        <div>
            <h1 className='bg-purple-50 p-5 text-center text-5xl py-28'>Applied Jobs</h1>
            <div className='flex justify-end my-container gap-5 my-5 '>
                <button onClick={() => handleData("Remote")}  className='my-btn'>Remote</button>
                <button onClick={() => remoteData("Onsite")} className='my-btn'>Onsite</button>
            </div >
           <div>
           {
               data.map((save,index)=>
                    <CardAppliedJob save={save} key={index}/>)
            }
           </div>
        </div>
    );
    
};

export default AppliedJobs;
