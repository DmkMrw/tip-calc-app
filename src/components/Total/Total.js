import './Total.scss';

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

export default Total;