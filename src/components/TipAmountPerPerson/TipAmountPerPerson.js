import './TipAmountPerPerson.scss';

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

export default TipAmountPerPerson;