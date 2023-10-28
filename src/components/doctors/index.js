import React from 'react';
import photo from '../../hack-4.jpg';
import Doctor from './Doctor';
import './doctors.css';

const Doctors = () => {
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
      name: 'doc2',
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

      <div id='doctors'>
        {testDocs.map((doc) => (
          <Doctor doctor={doc} key={doc.id} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
