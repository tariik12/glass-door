import React, { useEffect, useState } from 'react';
import CardAppliedJob from './CardAppliedJob';
    import { getFeatureCard } from '../assets/fakebd';
    import { toast } from 'react-hot-toast';


const AppliedJobs = () => {
    const saveData =getFeatureCard()
        const [data,setData] = useState(saveData)
    const handleData =(id)=>{
            const remoteJOb = saveData.filter(remote =>remote.rem_onsite_job === id)
            if(remoteJOb){

                setData(remoteJOb)
            }
            else{
                toast.success('Successfully toasted!')
            }
    }
    const remoteData =(id)=>{
            const onsiteJob = saveData.filter(onsite =>onsite.rem_onsite_job === id)
            if(onsiteJob){
                setData(onsiteJob)
            }
            else{
                toast.success('Successfully toasted!')
            }
    }
    useEffect(()=>{
        if(data.length==0){
            toast.error('Please Add!')
        }
    },[data])
    return (
        <div>
            <h1 className='bg-purple-50 p-5 text-center text-5xl py-28'>Applied Jobs</h1>
            <div className='flex justify-end my-container gap-5 my-5 '>
                <button onClick={() => handleData("Remote")}  className='my-btn'>Remote</button>
                <button onClick={() => remoteData("Onsite")} className='my-btn'>Onsite</button>
            </div >
           <div>
           {
               data.map((saveData,index)=>
                    <CardAppliedJob saveData={saveData} key={index}/>)
            }
           </div>
        </div>
    );
    
};

export default AppliedJobs;
