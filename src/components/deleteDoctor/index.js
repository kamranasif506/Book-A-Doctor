import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteDoctor, getDoctors } from '../../redux/doctors/doctorSlice';
import './deleteDoctor.css';

const DeleteDoctorPage = () => {
  const dispatch = useDispatch();
  const [pending, setPending] = useState('Delete Doctor');
  const { doctor } = useSelector((store) => store.doctor);
  const { isLoading } = useSelector((store) => store.doctor);

  const deleteDoctorHandler = async (doctorId) => {
    setPending('...Deleting Doctor');
    await dispatch(deleteDoctor(doctorId));
    await dispatch(getDoctors());
    setTimeout(() => {
      setPending('Delete Doctor');
    }, 3000);
  };

  useEffect(() => {
    dispatch(getDoctors());
  }, []);

  return (
    <section className="delete-doctor">
      <h3>Delete Doctors</h3>

      <ul className="delete-doctor-list">
        {doctor?.length === 0 ? (
          <p>Please add doctors to continue!</p>
        ) : (
          doctor?.map((doctor) => (
            <li key={doctor.id} className="delete-doctor-item">
              <div className="delete-doctor-item-image">
                <img
                  src={doctor.profile_picture}
                  alt={doctor.doctor_name}
                />
              </div>
              <div className="delete-doctor-item-name">
                {doctor.doctor_name}
              </div>
              <div className="delete-doctor-item-delete">
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={() => {
                    deleteDoctorHandler(doctor.id);
                  }}
                >
                  {pending}
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
