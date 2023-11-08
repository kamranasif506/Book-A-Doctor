import React, { useRef } from 'react';
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import Doctor from './Doctor';
import './doctors.css';

const Doctors = () => {
  const { doctor } = useSelector((store) => store.doctor);
  console.log(`my doctors...${doctor}`);
  // const photo = 'https://images.unsplash.com/photo-1657551760830-8a90773fa68c?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9jdG9ycyUyMHBob3RvfGVufDB8fDB8fHww';
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
