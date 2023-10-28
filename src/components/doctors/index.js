import React, { useRef } from 'react';
import photo from '../../hack-4.jpg';
import Doctor from './Doctor';
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs';
import './doctors.css';

const Doctors = () => {
  const docsRef = useRef();
  const docScrollHandler = (direction) => {
    if (!docsRef.current) return;

    if (direction === 'left') {
      docsRef.current.scrollLeft -= 300;
    } else {
      docsRef.current.scrollLeft += 300;
    }
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
    <section id='docs-div'>
      <div className='intro'>
        <h2>Available Doctors</h2>
        <p>Please select a doctor</p>
        <div id='dots' />
      </div>

      <div id='doctors' ref={docsRef}>
        {testDocs.map((doc) => (
          <Doctor doctor={doc} key={doc.id} />
        ))}
      </div>
      <button
        id='scroll-left'
        className='arrow'
        type='button'
        aria-label='Scroll left'
        onClick={() => docScrollHandler('left')}
      >
        <BsCaretLeft className='white icon' />
      </button>
      <button
        id='scroll-right'
        className='arrow'
        type='button'
        aria-label='Scroll right'
        onClick={() => docScrollHandler('right')}
      >
        <BsCaretRight className='white icon' />
      </button>
    </section>
  );
};

export default Doctors;
