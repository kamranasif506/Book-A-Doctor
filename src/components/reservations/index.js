// ReservationList.js

import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useSelector, useDispatch } from 'react-redux';
import { reservationsList } from '../../redux/reservations/reservationSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import './reservationList.css';

const ReservationList = () => {
  const { reservationList, isLoading, status } = useSelector((store) => store.reservation);
  const dispatch = useDispatch();
  const headers = {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  };
  useEffect(() => {
    dispatch(reservationsList(headers));
  }, [dispatch]);

  const columns = [
    {
      name: 'ID',
      selector: 'id',
      sortable: true,
    },
    {
      name: 'Customer Name',
      selector: 'customerName',
      sortable: true,
    },
    {
      name: 'Date',
      selector: 'date',
      sortable: true,
    },
    // Add more columns as needed
  ];
  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (status === 'success') {
    content = <DataTable title="Reservation List" columns={columns} data={reservationList} />;
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
