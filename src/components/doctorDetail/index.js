import React from 'react';
import { useParams } from 'react-router-dom';

const DoctorDetail = () => {
  const { docId } = useParams();
  //   Fetch doctor details
  
  return <div>DoctorDetail</div>;
};

export default DoctorDetail;
