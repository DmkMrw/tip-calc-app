import './app.scss'

const App = () => {
  return (
    <>
        <div className="bill-box">
          <div className="left-box">
            Left
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