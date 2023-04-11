import React from 'react';

const Job = ({jb}) => {
    const {category,description,picture} = jb
    return (
        <div>
            <img src={picture} alt="" />
            <h2>{category}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Job;