import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './appointment.css';
import { useParams } from 'react-router-dom';
// import { TimePicker, DatePicker } from '@mui/x-date-pickers';
import TimePicker from 'react-time-picker';
import DatePicker from 'react-datepicker';
import { postData } from '../../redux/appointments/appointmentSlice';

export default function Appointment() {
  const { docId } = useParams();
  console.log(docId);
  const dispatch = useDispatch();
  const [city, setCity] = useState('Select City');
  const [time, setTime] = useState('10:00');
  const [date, setDate] = useState('10:00');
  const [pending, setPending] = useState('Add Book');
  // function catagoryHandler(e) {
  //   console.log(e.$d);
  //   // const formattedDate = e.toLocaleDateString(e);
  //   // console.log(formattedDate);
  //   setCity(e);
  //   setTime(e);
  //   setDate(e.d);
  // }
  // const reservation = {
  //   city,
  //   time,
  //   date,
  // };
  // console.log(reservation);

  function postDispatcher() {
    const reservation = {
      city,
      time,
      date,
    };
    console.log(reservation);
    setPending('...Reserving');
    dispatch(postData(docId, reservation));
    // setTimeout(() => {
    //   dispatch();
    //   // dispatch(getBooks());
    //   setPending('Add Book');
    // }, 1000);
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
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
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
                  Click
                  <DatePicker
                    className="date-pik"
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                      console.log(date);
                      setDate(date);
                    }}
                  />
                </button>
                <button
                  className="btn time"
                  type="button"
                >
                  Click
                  <TimePicker
                    className="time-pik"
                    value={time}
                    onChange={(e) => {
                      console.log(e);
                      setTime(e);
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
