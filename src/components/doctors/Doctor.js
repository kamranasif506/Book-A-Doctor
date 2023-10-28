import React from 'react';
import { useNavigate } from 'react-router-dom';
import './doctor.css';

const Doctor = ({ doctor }) => {
  const navigate = useNavigate();

  const docNavigateHandler = () => {
    navigate(`/doctors/${doctor.id}`);
  };

  return (
    <div className='doc' onClick={docNavigateHandler}>
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
