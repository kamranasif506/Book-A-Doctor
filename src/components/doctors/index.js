import React, { useRef } from 'react';
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs';
import Doctor from './Doctor';
import './doctors.css';

const Doctors = () => {
  const photo = 'https://images.unsplash.com/photo-1657551760830-8a90773fa68c?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9jdG9ycyUyMHBob3RvfGVufDB8fDB8fHww';
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
    <section id="docs-div">
      <div className="intro">
        <h2>Available Doctors</h2>
        <p>Please select a doctor</p>
        <div id="dots" />
      </div>

      <div id="doctors" ref={docsRef}>
        {testDocs.map((doc) => (
          <Doctor doctor={doc} key={doc.id} />
        ))}
      </div>
      <button
        id="scroll-left"
        className="arrow"
        type="button"
        aria-label="Scroll left"
        onClick={() => docScrollHandler('left')}
      >
        <BsCaretLeft className="white icon" />
      </button>
      <button
        id="scroll-right"
        className="arrow"
        type="button"
        aria-label="Scroll right"
        onClick={() => docScrollHandler('right')}
      >
        <BsCaretRight className="white icon" />
      </button>
    </section>
  );
};

export default Doctors;
