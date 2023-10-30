import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BsCaretLeft } from 'react-icons/bs';

import { AiOutlineSetting } from 'react-icons/ai';
import randPhoto from '../../hack-4.jpg';
import './doctorDetail.css';

const DoctorDetail = () => {
  const navigate = useNavigate();
  const { docId } = useParams();
  //   Fetch doctor details
  const doctor = {
    id: docId,
    name: 'doc1',
    photo: randPhoto,
    desc: 'Some description about the doctor. This will be coming from the backend doctors database.',
    fbLink: '',
    twitterLink: '',
    availability: 'available',
    cost: '$12.00',
  };

  return (
    <section id="doc-detail-section">
      <div className="doc-photo-div">
        <img src={doctor.photo} alt={doctor.name} />
      </div>

      <div className="doc-details">
        <h2 className="doc-name">{doctor.name}</h2>
        <p>
          <span>Availability</span>
          <span>{doctor.availability}</span>
        </p>
        <p>
          <span>Cost</span>
          <span>{doctor.cost}</span>
        </p>

        <button type="button">
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
