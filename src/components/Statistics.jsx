import React from 'react';
import { PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const Assignment_Main_Mark = [
        { name: "Total Mark", value: 60 }
      ];
      const single_Assignment_Mark = [
        { name: "Assignment-1", value: 60 },
        { name: "Assignment-2", value: 59 },
        { name: "Assignment-3", value: 59 },
        { name: "Assignment-4", value: 60 },
        { name: "Assignment-5", value: 60 },
        { name: "Assignment-6", value: 60 },
        { name: "Assignment-7", value: 60 }
      ];
      
    return (
        <div >
             <h1 className='bg-purple-50 p-5 text-center text-5xl py-28'>Statistics</h1>
            <h1 className='border text-center p-5'>Assignment Mark : Pie Chart</h1>
            

            
          <div className='flex justify-center'>
          <PieChart  width={400} height={400}
           data={single_Assignment_Mark}
          >
      <Pie
        data={Assignment_Main_Mark}
        dataKey="value"
        cx={200}
        cy={200}
        outerRadius={50}
        fill="#8884d8"
      />
      <Pie
        data={single_Assignment_Mark}
        dataKey="value"
        cx={200}
        cy={200}
        innerRadius={70}
        outerRadius={90}
        fill="#82ca9d"
        label
      />
      
      
      <Tooltip />
     
            
    </PieChart>

          </div>
     
        </div>
    );
};

export default Statistics;