import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import './appointment.css';
import { useNavigate } from 'react-router-dom';
import { TimePicker, DatePicker } from '@mui/x-date-pickers';
import { postData } from '../../redux/appointments/appointmentSlice';

const NavAppointment = () => {
  const navigate = useNavigate();
  const { doctor } = useSelector((store) => store.doctor);
  const { isLoading } = useSelector((store) => store.doctor);
  const dispatch = useDispatch();
  const [docId, setDocId] = useState(null);
  const [location, setLocation] = useState(null);
  const [time, setTime] = useState(null);
  const [date, setDate] = useState(null);
  const [pending, setPending] = useState('Add Book');

  const datePickerSx = {
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
      input: '#ffff',
      color: 'grey',
    },
  };

  const postDispatcher = () => {
    const reservation = {
      location,
      time,
      date,
      docId,
    };
    console.log(reservation);
    let valid = true;
    if (reservation.location === null) {
      swal('No Empty values allowed!');
      valid = false;
      navigate('/reserve');
    }
    if (reservation.time === null) {
      swal('No Empty values allowed!');
      valid = false;
      navigate('/reserve');
    }
    if (reservation.date === null) {
      swal('No Empty values allowed!');
      valid = false;
      navigate('/reserve');
    }
    if (reservation.docId === null) {
      swal('No Empty values allowed!');
      valid = false;
      navigate('/reserve');
    }
    if (valid) {
      setPending('...Reserving');
      setTimeout(() => {
        dispatch(postData(reservation));
        setPending('Add Book');
        swal('Appointment Reserved Seccessfully!');
        navigate('/reservations');
      }, 1000);
    }
  };
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="appointment-container">
      <div className="transparent">
        <div className="appointent-body">
          <div className="appointment-detail">
            <h5 className="appointment-title">
              BOOK YOUR FAVORITE DOCTOR
              <span />
            </h5>
            <p className="apointment-paragraph">
              Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
              Impedit dicta recusandae officia.
              Ratione possimus harum optio
              molestiae adipisci veritatis
              corporis animi minima itaque
              neque nulla, praesentium
              illum odit ea exercitationem.
            </p>
            <div className="button-holder">
              <form action="" className="appointment-form">
                <button
                  className="btn city"
                  type="button"
                >
                  <select
                    value={docId}
                    onChange={(e) => {
                      setDocId(e.target.value);
                    }}
                    required
                  >
                    <option value="">Select Doctor</option>
                    {doctor.map((option) => (
                      <option key={option.value} value={option.id}>
                        {option.doctor_name}
                      </option>
                    ))}
                  </select>
                </button>
                <button
                  className="btn city"
                  type="button"
                >
                  <select
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                    }}
                  >
                    <option value="">Select Location</option>
                    <option value="London">London</option>
                    <option value="Paris">Paris</option>
                    <option value="Zuric">Zuric</option>
                    <option value="Washington-Dc">Washington-Dc</option>
                  </select>
                </button>
                <button
                  className="btn date"
                  type="button"
                >
                  {/* eslint-disable-next-line */}
                  <DatePicker
                    sx={datePickerSx}
                    onChange={(e) => {
                      const d = new Date(e).toLocaleDateString('fr-FR');
                      setDate(d);
                    }}
                  />
                </button>
                <button
                  className="btn time"
                  type="button"
                >
                  {/* eslint-disable-next-line */}
                  <TimePicker
                    sx={datePickerSx}
                    className="time-pik"
                    value={time}
                    onChange={(e) => {
                      const t = new Date(e).toLocaleTimeString('en-US', { hour12: false });
                      setTime(t);
                    }}
                  />
                </button>
              </form>
              <button
                type="submit"
                className="btn add-appointment"
                onClick={(e) => {
                  e.preventDefault();
                  postDispatcher();
                }}
              >
                {pending}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavAppointment;
