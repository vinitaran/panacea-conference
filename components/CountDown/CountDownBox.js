import React from 'react';
import PropTypes from 'prop-types';

const CountdownBox = ({ left, divideBy, label }) => {
  return(
    <div className="countdown__box">
      <div className="countdown__box_circles">
        <svg height="110" width="110">
        
          <circle 
          className='OuterCircle'
            stroke="#D15A6E"
            strokeWidth="9"
            r="47"
            cx="55"
            cy="55"
          />
          <circle 
          className='InnerCircle'
            stroke="#000000"
            strokeDashoffset={-((left / divideBy) * 47* 2 * Math.PI) + 47 * 2 * Math.PI}
            strokeDasharray={47* 2 * Math.PI}
            strokeWidth="3"
            r="47"
            cx="55"
            cy="55"
          />
        </svg>
        <div className="countdown__box_left">{left}</div>
      </div>
      <p className="countdown__box_label">{label}</p>
    </div>
  );
}

CountdownBox.propTypes = {
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  divideBy: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
}

export default CountdownBox;