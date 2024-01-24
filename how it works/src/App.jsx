import React, { useState } from 'react';
import './App.css';

function App() {
  const [goal, setGoal] = useState('');
  const [group, setGroup] = useState('');

  const [paid, setPaid] = useState(false);

  const handlePay = () => {
    if (goal && group) {
      setPaid(true);
    }
  }

  return (
    <>
      <div className=''>
        <label id='goal'>Select Your Goal</label>
        <select name="dropdown" id='goal' value={goal} onChange={e => setGoal(e.target.value)}>
          <option value="">Select...</option>
          <option value="option1">Educator</option>
          <option value="option2">Student</option>
        </select>
      </div>

      <div>
        <label id='group'>Create/Join a Group</label>
        <select name="dropdown" id='group' value={group} onChange={e => setGroup(e.target.value)}>
          <option value="">Select...</option>
          <option value="option1">Create</option>
          <option value="option2">Join</option>
        </select>
      </div>

      {/* payment */}
      <div className='paymentbox'>
        <label>Payment</label>
        <button className="button" disabled={!goal || !group} onClick={handlePay}><span className='pay1'>Pay </span></button>
      </div>

      {/* Earn rewards */}


      {paid && (
      <div>
        <button className='button1'>Earn Rewards</button>
      </div>
    )}



    </>
  )
}

export default App;
