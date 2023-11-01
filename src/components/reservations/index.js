import React from 'react';
import DataTable from 'react-data-table-component';

const ReservationList = () => {
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

  const data = [
    { id: 1, customerName: 'Hassan', date: '2023-10-31' },
    { id: 2, customerName: 'Jane Smith', date: '2023-11-05' },
    { id: 3, customerName: 'Addis', date: '2023-11-05' },
    { id: 4, customerName: 'Aklilu', date: '2023-11-05' },
    { id: 5, customerName: 'Kamran', date: '2023-11-05' },
    // Add more reservation data
  ];

  return (
    <section id="docs-div">
      <div className="intro">
        <h2>List Of Reservations</h2>
        <div id="dots" />
      </div>

      <div id="ReservationList">
        <DataTable
          title="Reservation List"
          columns={columns}
          data={data}
        />
      </div>
    </section>

  );
};

export default ReservationList;
