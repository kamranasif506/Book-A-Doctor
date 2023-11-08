import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getDeleteDoctors } from '../../redux/doctors/doctorSlice';
import { useDispatch } from 'react-redux';
import { doctorActions } from '../../redux/doctors/doctorSlice';
import './deleteDoctor.css';

const DeleteDoctorPage = () => {
  const dispatch = useDispatch();

  const { myDoctors: doctors, docsLoading } = useSelector((state) => state.doctor);

  const deleteDoctorHandler = (doctorId) => {
    dispatch(doctorActions.deleteDoctor({ doctorId }));
  };

  useEffect(() => {
    dispatch(getDeleteDoctors());
  }, [dispatch]);

  return (
    <section className='delete-doctor'>
      <h3>Delete Doctors</h3>

      <ul className='delete-doctor-list'>
        {doctors?.length === 0 ? (
          <p>Please add doctors to continue!</p>
        ) : (
          doctors?.map((doctor) => (
            <li key={doctor.id} className='delete-doctor-item'>
              <div className='delete-doctor-item-image'>
                <img
                  src={doctor.profile_picture}
                  alt={doctor.doctor_name}
                />
              </div>
              <div className='delete-doctor-item-name'>
                {doctor.doctor_name}
              </div>
              <div className='delete-doctor-item-delete'>
                <button
                  type='button'
                  disabled={docsLoading}
                  onClick={() => {
                    deleteDoctorHandler(doctor.id);
                  }}
                >
                  Delete Doctor
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </section>
  );
};

export default DeleteDoctorPage;
