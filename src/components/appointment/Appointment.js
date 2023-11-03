import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './appointment.css';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';

export default function Appointment() {
  const dispatch = useDispatch();
  const [time, setTime] = useState('10:00');
  const [date, setDate] = useState(null);
  const [pending, setPending] = useState('Add Book');
  function catagoryHandler(e) {
    setTime(e.target.value);
    setDate(e.target.value);
  }

  function postDispatcher() {
    const bookDetail = {
    };
    console.log(bookDetail);
    setPending('...Adding');
    // dispatch(postData(bookDetail));
    setTimeout(() => {
      dispatch();
      // dispatch(getBooks());
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
                    value={date}
                    d={date}
                    onChange={(e) => {
                      catagoryHandler(e);
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
                    style={{
                      color: 'red',
                      width: '10rem',
                    }}
                    selected={date}
                    date={date}
                    value={date}
                    onChange={setDate}
                  />
                </button>
                <button
                  className="btn time"
                  type="button"
                >
                  Click
                  <TimePicker
                    className="time-pik"
                    date={date}
                    value={time}
                    onChange={setTime}
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
