import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './appointment.css';
import { useParams, useNavigate } from 'react-router-dom';
import { TimePicker, DatePicker } from '@mui/x-date-pickers';
import { postData } from '../../redux/appointments/appointmentSlice';

export default function Appointment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { docId } = useParams();
  const [location, setLocation] = useState('Select Location');
  const [time, setTime] = useState('10:00');
  const [date, setDate] = useState(new Date(Date.now()));
  const [pending, setPending] = useState('Add Book');

  const reservation = {
    location,
    time,
    date,
    doctor_id: docId,
  };

  console.log(reservation);

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
      navigate('/reservations');
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
                    <option value="London">London</option>
                    <option value="Paris">Paris</option>
                    <option value="Zuric">Zuric</option>
                    <option value="Washington-Dc">Washington-Dc</option>
                  </select>
                </button>
                {/* eslint-disable-next-line */}
                <button
                  className="btn date"
                  type="button"
                >
                  <DatePicker
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
                    className="time-pik"
                    value={time}
                    onChange={(e) => {
                      const t = new Date(e).toLocaleTimeString('en-US', { hour12: false });
                      setTime(t);
                    }}
                    format="HH12:MI:SS AM"
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
