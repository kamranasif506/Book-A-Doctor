import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './appointment.css';
import { useParams } from 'react-router-dom';
import { TimePicker, DatePicker } from '@mui/x-date-pickers';
import { postData } from '../../redux/appointments/appointmentSlice';

export default function NavAppointment() {
  const { doctor } = useSelector((store) => store.doctor);
  const datePickerSx = {
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
      input: '#ffff',
      color: 'grey',
    },
  };
  const { appointment } = useSelector((store) => store);
  console.log(appointment);
  const { docId } = useParams();
  const dispatch = useDispatch();
  const [location, setLocation] = useState('Select Location');
  const [time, setTime] = useState('10:00');
  const [date, setDate] = useState('10:00');
  const [pending, setPending] = useState('Add Book');
  function postDispatcher() {
    const reservation = {
      location,
      time,
      date,
      docId,
    };
    setPending('...Reserving');
    setTimeout(() => {
      dispatch(postData(reservation));
      setPending('Add Book');
    }, 1000);
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
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                    }}
                  >
                    {doctor.map((option) => (
                      <option key={option.value} value={option.doctor_name}>
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
}
