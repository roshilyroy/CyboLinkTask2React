import React, { useState } from 'react';
import './atm.css';

function Atm() {
  const [amout, setAmout] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (event) => {
    setAmout(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (amout % 10 !== 0) {
      setResult('Number is invalid');
    } else {
      const a = Math.floor(amout / 1000);
      const b = Math.floor((amout - a * 1000) / 500);
      const c = Math.floor((amout - a * 1000 - b * 500) / 100);
      const d = Math.floor((amout - a * 1000 - b * 500 - c * 100) / 50);
      const e = Math.floor((amout - a * 1000 - b * 500 - c * 100 - d * 50) / 20);
      const f = Math.floor((amout - a * 1000 - b * 500 - c * 100 - d * 50 - e * 20) / 10);
      const total = a * 1000 + b * 500 + c * 100 + d * 50 + e * 20 + f * 10;

      let output = '';
      if (a > 0) {
        output += `${a} x 1000 = ${a * 1000}\n`;
      }
      if (b > 0) {
        output += `${b} x 500 = ${b * 500}\n`;
      }
      if (c > 0) {
        output += `${c} x 100 = ${c * 100}\n`;
      }
      if (d > 0) {
        output += `${d} x 50 = ${d * 50}\n`;
      }
      if (e > 0) {
        output += `${e} x 20 = ${e * 20}\n`;
      }
      if (f > 0) {
        output += `${f} x 10 = ${f * 10}\n`;
      }
      output += `Total = ${total}`;

      setResult(output);
    }
  };

  return (
    <div className='atmcalculator'>
      <form onSubmit={handleSubmit}>
        <h1>Enter The Amout</h1>
        <input type="number" value={amout} onChange={handleInputChange} />
        <br></br><br></br>
        <button className='atmbutton' type="submit">Submit</button>
      </form>
      <pre>{result}</pre>
    </div>
  );
}

export default Atm;