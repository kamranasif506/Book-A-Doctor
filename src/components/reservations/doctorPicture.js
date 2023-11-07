import React from 'react';
import PropTypes from 'prop-types';

const DoctorPictureCell = ({ value }) => (
  <img src={value} alt="Doctor's Profile" className="img-thumbnail" style={{ maxWidth: '75%', maxHeight: '75%', borderRadius: '50%' }} />
);

DoctorPictureCell.propTypes = {
  value: PropTypes.string, // Validate the 'value' prop as a string
};

DoctorPictureCell.defaultProps = {
  value: '', // Provide a default value if the prop is not provided
};

export default DoctorPictureCell;
