import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import './addDoctor.css';
import { getDoctors, postData } from '../../redux/doctors/doctorSlice';

const AddDoctor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [city, setLocation] = useState(null);
  const [doctorName, setName] = useState(null);
  const [specializationId, setSpecialization] = useState(null);
  const [profilePicture, setPicture] = useState(null);
  const [docBio, setBio] = useState(null);
  const [pending, setPending] = useState('Add New Doctor');
  const { specializations } = useSelector((store) => store.specialization);

  const postDispatcher = () => {
    const doctor = {
      location: city,
      doctor_name: doctorName,
      specialization_id: specializationId,
      profile_picture: profilePicture,
      bio: docBio,
    };
    let valid = true;
    if (doctor.location === null) {
      swal('No Empty values allowed!');
      valid = false;
      navigate('/addDoctor');
    }
    if (doctor.bio === null) {
      swal('No Empty values allowed!');
      valid = false;
      navigate('/addDoctor');
    }
    if (doctor.doctor_name === null) {
      swal('No Empty values allowed!');
      valid = false;
      navigate('/addDoctor');
    }
    if (doctor.profile_picture === null) {
      swal('No Empty values allowed!');
      valid = false;
      navigate('/addDoctor');
    }
    if (doctor.location === null) {
      swal('No Empty values allowed!');
      valid = false;
      navigate('/addDoctor');
    }
    if (valid) {
      setPending('...Adding Doctor');
      setTimeout(() => {
        dispatch(postData(doctor));
        setPending('Add Book');
        dispatch(getDoctors());
        swal('Doctor Added Seccessfully!');
        navigate('/doctors');
      }, 1000);
    }
  };
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
                {specializations.map((option) => (
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
};

export default AddDoctor;
