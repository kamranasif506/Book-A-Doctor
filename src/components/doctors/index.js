import React, { useRef } from 'react';
import photo from '../../hack-4.jpg';
import Doctor from './Doctor';
import './doctors.css';

const Doctors = () => {
  const docsRef = useRef()
  const docScrollHandler = (direction) => {
    if (!docsRef) return;

    direction === 'left'
      ? (docsRef.current.scrollLeft -= 300)
      : (docsRef.current.scrollLeft += 300);
  };

  const testDocs = [
    {
      id: 1,
      name: 'doc1',
      photo,
      desc: 'Some description about the doctor. This will be coming from the backend doctors database.',
      fbLink: '',
      twitterLink: '',
    },
    {
      id: 2,
      name: 'doc2',
      photo,
      desc: 'Some description about the doctor. This will be coming from the backend doctors database.',
      fbLink: '',
      twitterLink: '',
    },
    {
      id: 3,
      name: 'doc3',
      photo,
      desc: 'Some description about the doctor. This will be coming from the backend doctors database.',
      fbLink: '',
      twitterLink: '',
    },
    {
      id: 4,
      name: 'doc4',
      photo,
      desc: 'Some description about the doctor. This will be coming from the backend doctors database.',
      fbLink: '',
      twitterLink: '',
    },
  ];
  return (
    <div id='docs-div'>
      <div className='intro'>
        <h2>Available Doctors</h2>
        <p>Please select a doctor</p>
        <div id='dots'></div>
      </div>

      <div id='doctors' ref={docsRef}>
        {testDocs.map((doc) => (
          <Doctor doctor={doc} key={doc.id} />
        ))}
      </div>
      <div
        id='scroll-left'
        onClick={() => docScrollHandler('left')}
      ></div>
      <div
        id='scroll-right'
        onClick={() => docScrollHandler('right')}
      ></div>
    </div>
  );
};

export default Doctors;
