import React from 'react';
import { useParams } from 'react-router-dom';
import randPhoto from '../../hack-4.jpg';
import { BsCaretLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import './doctorDetail.css'

const DoctorDetail = () => {
  const navigate = useNavigate();
  const { docId } = useParams();
  //   Fetch doctor details
  const doctor = {
    id: 1,
    name: 'doc1',
    photo: randPhoto,
    desc: 'Some description about the doctor. This will be coming from the backend doctors database.',
    fbLink: '',
    twitterLink: '',
    availability: 'available',
    cost: '$12.00'
  };

  return (
    <section id='doc-detail-section'>
      <div className='doc-photo-div'>
        <img src={doctor.photo} alt={doctor.name} />
      </div>
      <div className='doc-details'>
        <p>
          <span>Name</span>
          <span>{doctor.name}</span>
        </p>
        <p>
          <span>Availability</span>
          <span>{doctor.availability}</span>
        </p>
        <p>
          <span>Cost</span>
          <span>{doctor.cost}</span>
        </p>

        <button type='button'>Reserve</button>
      </div>

      <button
        id='scroll-left'
        className='arrow'
        type='button'
        aria-label='Go Back'
        onClick={() => navigate('/doctors')}
      >
        <BsCaretLeft class='white icon' />
      </button>
    </section>
  );
};

export default DoctorDetail;
