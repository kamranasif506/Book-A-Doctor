import React, { useRef } from 'react';
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import Doctor from './Doctor';
import './doctors.css';

const Doctors = () => {
  const { doctor } = useSelector((store) => store.doctor);
  const docsRef = useRef();
  const docScrollHandler = (direction) => {
    if (!docsRef.current) return;

    if (direction === 'left') {
      docsRef.current.scrollLeft -= 300;
    } else {
      docsRef.current.scrollLeft += 300;
    }
  };

  return (
    <section id="docs-div">
      <div className="intro">
        <h2>Available Doctors</h2>
        <p>Please select a doctor</p>
        <div id="dots" />
      </div>

      <div id="doctors" ref={docsRef}>
        {doctor.map((doc) => (
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
