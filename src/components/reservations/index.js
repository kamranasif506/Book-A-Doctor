// ReservationList.js

import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useSelector, useDispatch } from 'react-redux';
import { reservationsList } from '../../redux/reservations/reservationSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import './reservationList.css';
import DoctorPictureCell from './doctorPicture';

const ReservationList = () => {
  const { reservationList, isLoading, status } = useSelector((store) => store.reservation);
  const dispatch = useDispatch();
  const headers = {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  };

  const fetchData = () => {
    dispatch(reservationsList(headers));
  };

  useEffect(() => {
    fetchData();
  });

  const customStyles = {
    headCells: {
      style: {
        fontSize: '1.2rem', // Adjust the font size as needed
      },
    },
    cells: {
      style: {
        fontSize: '1.5rem', // Adjust the font size as needed
      },
    },
  };

  const columns = [
    {
      name: 'Picture',
      selector: (row) => row.profile_picture,
      sortable: false,
      cell: (row) => <DoctorPictureCell value={row.profile_picture} />,
    },
    {
      name: 'Doctor Name',
      selector: (row) => row.doctor_name,
      sortable: true,
    },
    {
      name: 'Appointment Date',
      selector: (row) => row.appointment_date,
      sortable: true,
    },
    {
      name: 'Location',
      selector: (row) => row.location,
      sortable: true,
    },
    // Add more columns as needed
  ];
  const result = reservationList.map((appointment) => ({
    profile_picture: appointment.doctor.profile_picture,
    doctor_name: appointment.doctor.doctor_name,
    appointment_date: appointment.date,
    location: appointment.location,
  }));
  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (status === 'success') {
    content = <DataTable columns={columns} data={result} customStyles={customStyles} className="table table-bordered table-striped" />;
  } else {
    content = (
      <p>
        Error:
        {status}
      </p>
    );
  }
  return (
    <section id="reservation-div">
      <div className="intro">
        <h2>List Of Reservations</h2>
        <div id="dots" />
      </div>
      <div className="row" id="doctors">
        <div className="col-12">
          {content}
        </div>
      </div>
    </section>
  );
};

export default ReservationList;
