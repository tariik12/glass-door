import React, { useState } from 'react';
// import  {  useContext } from 'react';
// import {ProductContext } from '../App';
import CardAppliedJob from './CardAppliedJob';
    import { getShoppingCart } from '../assets/fakebd';


const AppliedJobs = () => {
    // const saveData =useContext(ProductContext)
    const getShoppingCar =getShoppingCart()
    console.log(getShoppingCar)
    const [data,setData] = useState(getShoppingCar)
    const handleData =(id)=>{
            const k = getShoppingCar.filter(f =>f.remote_onsite === id)
            setData(k)
    }
    const remoteData =(id)=>{
            const k = getShoppingCar.filter(f =>f.remote_onsite === id)
            setData(k)
    }
    return (
        <div>
            <h1>hello</h1>
            <div className='flex justify-center gap-4'>
                <button onClick={() => handleData("Remote")}  className='btn'>Remote</button>
                <button onClick={() => remoteData("Onsite")} className='btn'>Onsite</button>
            </div>
            {
               data.map((save,index)=>
                    <CardAppliedJob save={save} key={index}/>)
            }
        </div>
    );
};

export default AppliedJobs;

/**
 *  let bk = []
                    if(handle ==="1abc1"){
                      const d =  save.filter(sa =>sa.is ==="1abc1")
                      bk.push(d)
                      console.log(d)
                    }
                    else if(handle ==="2abc2"){
                        const d =  save.filter(sa =>sa.is ==="2abc2")
                        bk.push(d)
                        console.log(d)
                    }
                    else{
                        bk.push(save)
                    }
 */