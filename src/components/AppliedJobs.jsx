import React, { useState } from 'react';
// import  {  useContext } from 'react';
// import {ProductContext } from '../App';
import CardAppliedJob from './CardAppliedJob';
    import { getShoppingCart } from '../assets/fakebd';
import { toast } from 'react-hot-toast';


const AppliedJobs = () => {
    // const saveData =useContext(ProductContext)
    const getShoppingCar =getShoppingCart()
    console.log(getShoppingCar)
   if (!getShoppingCar ===0){
        const [data,setData] = useState(getShoppingCar)
    const handleData =(id)=>{
            const k = getShoppingCar.filter(f =>f.rem_onsite_job === id)
            setData(k)
    }
    const remoteData =(id)=>{
            const k = getShoppingCar.filter(f =>f.rem_onsite_job === id)
            setData(k)
    }
    return (
        <div>
            <h1>hello</h1>
            <div className='flex justify-center gap-4'>
                <button onClick={() => handleData("Remote")}  className='my-btn'>Remote</button>
                <button onClick={() => remoteData("Onsite")} className='my-btn'>Onsite</button>
            </div>
            {
               data.map((save,index)=>
                    <CardAppliedJob save={save} key={index}/>)
            }
        </div>
    );
    }
    else{
         toast.error('No Job Applied')
    }
    
};

export default AppliedJobs;
