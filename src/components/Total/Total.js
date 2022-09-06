import './Total.scss';

import PropTypes from 'prop-types';


const Total = (props) => {
  return (
    <>
      <div className="tip-amount-container">
        <div className="tip-amount">
          <span className="tip">Total</span>
          <span className="person">/ person</span>
        </div>
        <div className="tip-amount-count">
        ${props.total}
        </div>
      </div>
    </>
  );
}

Total.propTypes = {
  total: PropTypes.string,
};

export default Total;