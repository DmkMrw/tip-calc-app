import './TipAmountPerPerson.scss';

import PropTypes from 'prop-types';

const TipAmountPerPerson = (props) => {
  return (
    <>
      <div className="tip-amount-container">
        <div className="tip-amount">
          <span className="tip">Tip Amount</span>
          <span className="person">/ person</span>
        </div>
        <div className="tip-amount-count">
        ${props.tipAmount}
        </div>
      </div>
    </>
  );
}

TipAmountPerPerson.propTypes = {
  tipAmount: PropTypes.string,
};


export default TipAmountPerPerson;