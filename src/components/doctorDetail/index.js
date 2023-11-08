import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsCaretLeft } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
import './doctorDetail.css';

const DoctorDetail = () => {
  const { docId } = useParams();
  const { doctor } = useSelector((store) => store.doctor);
  const filteredDoctors = doctor.filter((doc) => doc.id === +docId);

  const navigate = useNavigate();

  const reservationNavHandler = () => {
    navigate(`/doctors/${docId}/reservation`);
  };

  return (
    <section id="doc-detail-section">
      <div className="doc-photo-div">
        <img src={filteredDoctors[0].profile_picture} alt={filteredDoctors[0].doctor_name} />
      </div>

      <div className="doc-details">
        <h2 className="doc-name">{filteredDoctors[0].doctor_name}</h2>
        <p>
          <span>{filteredDoctors[0].doctor_name}</span>
          <span>{filteredDoctors[0].bio}</span>
        </p>
        {/* <p>
          <span>Cost</span>
          <span>{filteredDoctors.cost}</span>
        </p> */}

        <button
          type="button"
          onClick={reservationNavHandler}
        >
          {' '}
          <AiOutlineSetting className="white icon" />
          {' '}
          Reserve
        </button>

      </div>

      <button
        id="scroll-left"
        className="arrow"
        type="button"
        aria-label="Go Back"
        onClick={() => navigate('/doctors')}
      >
        <BsCaretLeft className="white icon" />
      </button>
    </section>
  );
};

export default DoctorDetail;
