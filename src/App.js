import { useState } from 'react';
import './app.scss';
import TipAmountPerPerson from './components/TipAmountPerPerson/TipAmountPerPerson';
import Total from './components/Total/Total';


const App = () => {

  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');
  const [numOfPpl, setNumOfPpl] = useState('');
  const [tipAmount, setTipAmount] = useState('0.00');
  const [total, setTotal] = useState('0.00');
  const [active, setActive] = useState('');
  const [customTip, setCustomTip] = useState('')


  const handleCount = (e) => {
    setNumOfPpl(e)
      const numberOfPeople = e;

    if (customTip === '') {
      const tipCorrectValue = Number(tip.lastIndexOf('%') > 0 ? tip.slice(0, -1) : tip);
      const tipAmount = Number(bill) * tipCorrectValue / 100
      const total = (Number(bill) + (Number(bill) * tipCorrectValue / 100)) / Number(numberOfPeople)
      const totalResult = total.toFixed(2)
      numberOfPeople !== '' ? setTotal(totalResult) : setTotal('0.00')
      const tipAmountPerPerson = (tipAmount / numberOfPeople).toFixed(2);
      numberOfPeople !== '' ? setTipAmount(tipAmountPerPerson) : setTipAmount('0.00')
    } else {
      const tipAmount = Number(bill) * customTip / 100
      const total = (Number(bill) + (Number(bill) * customTip / 100)) / Number(numberOfPeople)
      const totalResult = total.toFixed(2)
      numberOfPeople !== '' ? setTotal(totalResult) : setTotal('0.00')
      const tipAmountPerPerson = (tipAmount / numberOfPeople).toFixed(2);
      numberOfPeople !== '' ? setTipAmount(tipAmountPerPerson) : setTipAmount('0.00')
      setActive('');
    }

  };

  const selectTip = (value) => {
    setActive(value)
    setTip(value)
  };

  const handleCustomTip = (value) => {
    setCustomTip(value);
    setActive('');
  };

  const handleReset = () => {
    setBill('');
    setTip('');
    setCustomTip('');
    setNumOfPpl('');
    setTipAmount('0.00');
    setTotal('0.00');
    setActive('');
  };



  const numOfButton = ['5%', '10%','15%','25%','50%']

  return (
    <>
      <div className="bill-box">
        <div className="left-box">
          <div className="bill">
            <span className="title">Bill</span>
            <div className="bill-price">
              <span>$</span>
              <input type="text" placeholder='0' onChange={(e) => setBill(e.target.value)} value={bill} />
            </div>
          </div>
          <div className="tip-select">
            <span className="title">Select Tip %</span>
            <div className="tip-tiles">
              {numOfButton.map((button) => {
                return <div key={button} id={button} className={`tile ${active === button ? 'active' : ''}`} onClick={(e)=> selectTip(e.target.innerText)}>{button}</div>
              })}
              <input type="text" className="tile" placeholder='Custom' onChange={(e) => handleCustomTip(e.target.value)} value={customTip} />
            </div>
          </div>
          <div className="num-of-ppl">
            <span className="title">Number of People</span>
            <input type="text" placeholder='0' onChange={(e)=>handleCount(e.target.value)} value={numOfPpl} />
          </div>
        </div>
        <div className="right-box">
          <TipAmountPerPerson tipAmount={tipAmount} />
          <Total total={total} />
        <button className="tip-btn" onClick={()=>handleReset()}>RESET</button>
        </div>
      </div>
    </>
  );
}

export default App;
