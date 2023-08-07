import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import './FacebookIcon.css'; // Import your CSS file

const FacebookIcon = ({ className }) => {
  return <FontAwesomeIcon icon={faFacebookF} className={className} />;
};

export default FacebookIcon;