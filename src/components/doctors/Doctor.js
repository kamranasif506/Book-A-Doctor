import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { navActions } from '../../redux/navbar/navSlice';
import './doctor.css';

const Doctor = ({ doctor }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const docNavigateHandler = () => {
    navigate(`/doctors/${doctor.id}`);
    dispatch(navActions.setActive('doctors'));
  };

  return (
    <button type="button" className="doc" onClick={docNavigateHandler} onKeyDown={docNavigateHandler}>
      <div className="photo-div">
        <img src={doctor.photo} alt={doctor.name} />
      </div>
      <div id="dots" />
      <h5>{doctor.name}</h5>
      <p>{doctor.desc}</p>
      {/* Links here */}
    </button>
  );
};

Doctor.propTypes = {
  doctor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Doctor;
