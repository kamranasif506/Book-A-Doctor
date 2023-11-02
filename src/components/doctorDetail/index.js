import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BsCaretLeft } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
// import randPhoto from 'https://unsplash.com/photos/female-doctor-in-white-coat-holding-blood-test-tubes-in-hands-while-wrapped-up-in-work-at-modern-lab-female-life-science-professional-holding-glass-cuvette-healthcare-and-biotechnology-concept-LXtenj7khic';
import './doctorDetail.css';
// import { func } from 'prop-types';

const DoctorDetail = () => {
  const navigate = useNavigate();
  const randPhoto = 'https://unsplash.com/photos/female-doctor-in-white-coat-holding-blood-test-tubes-in-hands-while-wrapped-up-in-work-at-modern-lab-female-life-science-professional-holding-glass-cuvette-healthcare-and-biotechnology-concept-LXtenj7khic';
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
  const reservationNavHandler = () => {
    navigate(`/doctors/${doctor.id}/reservation`);
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
