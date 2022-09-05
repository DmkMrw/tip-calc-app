import { useState } from 'react';
import './app.scss';
import TipAmountPerPerson from './components/TipAmountPerPerson/TipAmountPerPerson';
import Total from './components/Total/Total';


const App = () => {

  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');
  const [numOfPpl, setNumOfPpl] = useState();
  const [tipAmount, setTipAmount] = useState('0.00');
  const [total, setTotal] = useState('0.00');


  const handleCount = (e) => {
    setNumOfPpl(e)
    const numberOfPeople = e;
    const tipCorrectValue = Number(tip.lastIndexOf('%') > 0 ? tip.slice(0, -1) : tip);
    const tipAmount = (Number(bill) * tipCorrectValue / 100)
    const total = (Number(bill) + (Number(bill) * tipCorrectValue / 100)) / Number(numberOfPeople)
    const totalResult = total.toFixed(2)
    numberOfPeople !== '' ? setTotal(totalResult) : setTotal('0.00')
    const tipAmountPerPerson = (tipAmount / numberOfPeople).toFixed(2);
    numberOfPeople !== '' ? setTipAmount(tipAmountPerPerson) : setTipAmount('0.00')
  };

  const handleReset = () => {
    setBill('');
    setTip('');
    setNumOfPpl('');
    setTipAmount('0.00');
    setTotal('0.00');
  }

  return (
    <>
      <div className="bill-box">
        <div className="left-box">
          <div className="bill">
            <span className="title">Bill</span>
            <div className="bill-price">
              <input type="text" placeholder='0' onChange={(e) => setBill(e.target.value)} value={bill} />
            </div>
          </div>
          <div className="tip-select">
            <span className="title">Select Tip %</span>
            <div className="tip-tiles">
              <div className="tile" onClick={(e)=> setTip(e.target.innerText)}>5%</div>
              <div className="tile" onClick={(e)=> setTip(e.target.innerText)}>10%</div>
              <div className="tile" onClick={(e)=> setTip(e.target.innerText)}>15%</div>
              <div className="tile" onClick={(e)=> setTip(e.target.innerText)}>25%</div>
              <div className="tile" onClick={(e)=> setTip(e.target.innerText)}>50%</div>
              <input type="text" className="tile" placeholder='Custom' onChange={(e)=> setTip(e.target.value)}/>
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

    //  color: hsl(172, 67%, 45%)