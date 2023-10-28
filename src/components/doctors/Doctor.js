import React from 'react';
import './doctor.css'

const Doctor = ({ doctor }) => {
  return (
    <div className='doc'>
      <div className='photo-div'>
        <img src={doctor.photo} alt={doctor.name} />
      </div>
      <div id='dots'></div>
      <h5>{doctor.name}</h5>
      <p>{doctor.desc}</p>
      {/* Links here */}
    </div>
  );
};

export default Doctor;
