import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './addDoctor.css';
import { postData } from '../../redux/doctors/doctorSlice';

export default function AddDoctor() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [city, setLocation] = useState('Select Location');
  const [doctorName, setName] = useState('Name');
  const [specializationId, setSpecialization] = useState('Specialization');
  const [profilePicture, setPicture] = useState('Image');
  const [docBio, setBio] = useState('Doctor bio');
  const [pending, setPending] = useState('Add New Doctor');
  const { specialization } = useSelector((store) => store.specialization);
  function postDispatcher() {
    const doctor = {
      location: city,
      doctor_name: doctorName,
      specialization_id: specializationId,
      profile_picture: profilePicture,
      bio: docBio,
    };
    setPending('...Adding Doctor');
    setTimeout(() => {
      dispatch(postData(doctor));
      setPending('Add Book');
      navigate('/doctors');
    }, 1000);
  }
  return (
    <main className="add-doctor">
      <div className="title-doc"><h1>ADD DOCTOR</h1></div>
      <div className="doctor-container">
        <form className="doctor-form">
          <div className="doc-input-div">
            <div className="doc-name-div">
              <label htmlFor="name" className="doc-name-label">Name</label>
              <input
                className="name-input"
                id="name"
                placeholder="Name"
                type="text"
                name="doc_name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
            <div className="special-div">
              <label htmlFor="specialization" className="special-label">Specialization</label>
              <select
                className="special-input"
                value={specializationId}
                onChange={(e) => {
                  setSpecialization(e.target.value);
                }}
                required
              >
                <option value="">Select a Specialization</option>
                {specialization.map((option) => (
                  <option key={option.value} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="location-div">
              <label htmlFor="location" className="doc-location-label">Location</label>
              <input
                className="location-input"
                placeholder="Location"
                type="text"
                name="location"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
            </div>
            <div className="image-div">
              <label htmlFor="image" className="photo-label">image</label>
              <input
                placeholder="Profile Picture URL"
                className="image-input"
                id="image"
                type="text"
                name="profile_pic"
                onChange={(e) => {
                  setPicture(e.target.value);
                }}
                required
              />
            </div>
            <div className="bio-div">
              <label htmlFor="bio" className="bio-label">Bio</label>
              <textarea
                className="bio-input"
                id="bio"
                placeholder="Bio"
                name="bio"
                onChange={(e) => {
                  setBio(e.target.value);
                }}
              />
            </div>
          </div>
          <button
            type="submit"
            className="doc-add-btn"
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
