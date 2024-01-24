in this file i have used react to create a UI in which I have created to drop downs one is for selecting goal i.e. student,educator and other is for selecting wether you have to create or join i.e. create/join.

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
      
the pay button is initially disabled and in gray color but when we filled the to dropdowns then it will activate and will have orange color having having a animation.

        <div className='paymentbox'>
                <label>Payment</label>
                <button className="button" disabled={!goal || !group} onClick={handlePay}><span className='pay1'>Pay </span></button>
        </div>
        css code below 
        .button {
          display: inline-block;
          border-radius: 4px;
          background-color: #f4511e;
          border: none;
          color: #FFFFFF;
          text-align: center;
          font-size: 28px;
          padding: 10px;
          width: 200px;
          transition: all 0.5s;
          cursor: pointer;
          margin: 5px;
        }
        
        .button:disabled {
          background-color: #808080;
          cursor: not-allowed;
        }
        
        
        .button span {
          cursor: pointer;
          display: inline-block;
          position: relative;
          transition: 0.5s;
        }
        
        .button span:after {
          content: '\00bb';
          position: absolute;
          opacity: 0;
          top: 0;
          right: -20px;
          transition: 0.5s;
        }
        
        .button:hover span {
          padding-right: 25px;
        }
        
        .button:hover span:after {
          opacity: 1;
          right: 0;
        }
      
once we clicked the pay button then only rewards button will become visible and after clicking rewards button we will be able to get reward.

        const [paid, setPaid] = useState(false);

          const handlePay = () => {
            if (goal && group) {
              setPaid(true);
            }
          }
          
        {paid && (
              <div>
                <button className='button1'>Earn Rewards</button>
              </div>
            )}   
 
the rewards button will contain animations and design.

        .button1 {
          display: inline-block;
          font-size: 16px;
          padding: 10px 20px;
          margin: 10px 2px;
          cursor: pointer;
          text-align: center;
          text-decoration: none;
          outline: none;
          color: #fff;
          background-color: rgb(246, 40, 246);
          border: none;
          border-radius: 15px;
          box-shadow: 0 9px rgb(243, 6, 180);
          width: 200px;
        }
        
        .button1:hover {background-color:red}
        
        .button1:active {
          background-color: blue;
          box-shadow: 0 5px #666;
          transform: translateY(4px);
        }

the backgorund will be dynamic too means it will be having animation .

        css code below
        
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
        body {
          font-family: 'Roboto', sans-serif;
          margin: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-size: 200% 200%;
          background-image: linear-gradient(45deg, #85FFBD 10%, #FFFB7D 90%);
          animation: Gradient 6s ease infinite;
        }
        
        @keyframes Gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

there are animations also involving change color label texts and dropdowns also.
