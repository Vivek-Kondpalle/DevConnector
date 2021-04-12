import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({
  education: { school, from, to, fieldofstudy, degree, description },
}) => {
  return (
    <div>
      <div>
        <h3>{school}</h3>
        <p>
          <Moment format='DD/MM/YYYY'>{from}</Moment> -{' '}
          {to ? <Moment format='DD/MM/YYYY'>{to}</Moment> : 'Current'}
        </p>
        <p>
          <strong>Degree: </strong>
          {degree}
        </p>
        <p>
          <strong>Field Of Study: </strong>
          {fieldofstudy}
        </p>
        <p>
          <strong>Description: </strong>
          {description}
        </p>
      </div>
    </div>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired,
};

export default ProfileEducation;
