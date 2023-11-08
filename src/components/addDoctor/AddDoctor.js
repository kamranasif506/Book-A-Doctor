import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './addDoctor.css';
import { postData } from '../../redux/doctors/doctorSlice';
import { useEffect } from 'react';

export default function AddDoctor() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { specialization } = useSelector(
    (store) => store.specialization
  );

  const [doctorName, setName] = useState('');
  const [specializationId, setSpecialization] = useState(1);
  const [city, setLocation] = useState('');
  const [profilePicture, setPicture] = useState('');
  const [docBio, setBio] = useState('');
  const [pending, setPending] = useState('Add Doctor');
  const [btnDisabled, setBtnDisabled] = useState(false);

  useEffect(() => {
    if (
      doctorName === '' ||
      specializationId === '' ||
      city === '' ||
      profilePicture === '' ||
      docBio === ''
    ) {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
  }, [doctorName, specializationId, city, profilePicture, docBio]);

  function postDispatcher() {
    const doctor = {
      location: city,
      doctor_name: doctorName,
      specialization_id: specializationId,
      profile_picture: profilePicture,
      bio: docBio,
    };
    setPending('Adding Doctor...');
    setTimeout(() => {
      dispatch(postData(doctor));
      setPending('Add Doctor');
      navigate('/doctors');
    }, 1000);
  }
  return (
    <main className='add-doctor'>
      <div className='title-doc'>
        <h1>ADD DOCTOR</h1>
      </div>
      <div className='doctor-container'>
        <form className='doctor-form'>
          <div className='doc-input-div'>
            <div className='doc-name-div'>
              <label htmlFor='name' className='doc-name-label'>
                Name
              </label>
              <input
                className='name-input'
                id='name'
                placeholder='Name'
                type='text'
                name='doc_name'
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className='special-div'>
              <label
                htmlFor='specialization'
                className='special-label'
              >
                Specialization
              </label>
              <select
                className='special-input'
                value={specializationId}
                onChange={(e) => {
                  setSpecialization(e.target.value);
                }}
                required
              >
                {specialization.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
            <div className='location-div'>
              <label
                htmlFor='location'
                className='doc-location-label'
              >
                Location
              </label>
              <input
                className='location-input'
                placeholder='Location'
                type='text'
                name='location'
                required
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
            </div>
            <div className='image-div'>
              <label htmlFor='image' className='photo-label'>
                image
              </label>
              <input
                placeholder='Profile Picture URL'
                className='image-input'
                id='image'
                type='text'
                name='profile_pic'
                onChange={(e) => {
                  setPicture(e.target.value);
                }}
              />
            </div>
            <div className='bio-div'>
              <label htmlFor='bio' className='bio-label'>
                Bio
              </label>
              <textarea
                className='bio-input'
                id='bio'
                placeholder='Bio'
                name='bio'
                required
                onChange={(e) => {
                  setBio(e.target.value);
                }}
              />
            </div>
          </div>
          <button
            type='submit'
            className='doc-add-btn'
            disabled={btnDisabled}
            onClick={(e) => {
              e.preventDefault();
              postDispatcher();
            }}
          >
            {pending}
          </button>
        </form>
      </div>
    </main>
  );
}
