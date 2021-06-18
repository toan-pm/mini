import React from 'react';
import PropTypes from 'prop-types';
import './HeroImage.css';

const HeroImage = ({ image, title, text }) => (
  <div className="rmdb-heroimage"
    style={{
      background:
        `linear-gradient(to bottom, rgba(0,0,0,0.4)
        20%,rgba(0,0,0,0.4)
        30%,rgba(0,0,0,0.45)
        39%,rgba(0,0,0,0.5)
        49%,rgba(0,0,0,0.55)
        60%,rgba(0,0,0,.65)
        70%,rgba(0,0,0,.75)
        80%,rgba(0,0,0,.90)
        90%,rgba(0,0,0,1)
        100%),
        url('${image}'), #1c1c1c`
    }}
  >
    <div className="rmdb-heroimage-content">
      <div className="rmdb-heroimage-text">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  </div>
)

HeroImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
}

export default HeroImage;