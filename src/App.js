import './app.scss'

const App = () => {
  return (
    <>
      <div className="bill-box">
        <div className="left-box">
          <div className="bill">
            <span className="title">Bill</span>
            <div className="bill-price">
              {/* <span className="dollar">$</span> */}
              <input type="text" placeholder='$'/>
            </div>
          </div>
          <div className="tip-select">
            <span className="title">Select Tip %</span>
            <div className="tip-tiles">
              <div className="tile">5%</div>
              <div className="tile">10%</div>
              <div className="tile">15%</div>
              <div className="tile">25%</div>
              <div className="tile">50%</div>
              <input type="text" className="tile" placeholder='Custom'/>
            </div>
          </div>
          <div className="num-of-ppl">
            <span className="title">Number of People</span>
            <input type="text" placeholder='0' />
          </div>
        </div>
        <div className="right-box">
          <div className="tip-amount-container">
            <div className="tip-amount">
              <span className="tip">Tip Amount</span>
              <span className="person">/ person</span>
            </div>
            <div className="tip-amount-count">
            $0.00
            </div>
        </div>
        <div className="tip-amount-container">
          <div className="tip-amount">
            <span className="tip">Total</span>
            <span className="person">/ person</span>
          </div>
          <div className="tip-amount-count">
          $0.00
          </div>
        </div>
        <button className="tip-btn">RESET</button>
        </div>
      </div>
    </>
  );
}

export default App;

    //  color: hsl(172, 67%, 45%)