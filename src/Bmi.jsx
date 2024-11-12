import React, { useState } from "react";
import './Bmi.css'

function Bmi() {

  const [weight,setweight]=useState(0);
  // const [value,setvalue]=useState9(0);
  const [hight,sethight]=useState(0);
  const [bmi,setbmi]=useState('');
  const [message,setmessage]=useState('');



  let calbmi= (event)=>{
    event.preventDefault()
    if(hight==0 || weight==0){
      alert("enter the valid hight")
    }
    else{
      let bmi=(weight/(hight*hight))*703;
      setbmi(bmi.toFixed(1))

      if(bmi>18.5){
        setmessage('you are underweight');
      }
      else if(bmi>=18.5 && bmi<25 ){
        setmessage('you are healthy')
      } else if(bmi>=25 && bmi<30){
        setmessage('you are overweight')

      }
      else{
        setmessage('you are obese')
      }
    }

  }

  let reload=()=>{
    window.location.reload();
  }


  
  return (
    <div className="main" >
      <div className="container">
        <h1>Bmi Calcultor</h1>
        <form action="" onSubmit={calbmi} >
          <div>
            <label htmlFor="">Weight (lbs)</label>
            <input type="text" placeholder="enter the weight" value={weight} onChange={(e)=> setweight(e.target.value)} />
          </div>
          <div>
            <label htmlFor="">Hight (in)</label>
            <input type="text" placeholder="enter the weight" value={hight} onChange={(e)=> sethight(e.target.value)} />
          </div>
          <div>
            <button className="btn" type="submit">
              Sumbit
            </button>
            <button className="btn btn-outline" type="submit" onClick={reload}>
              Reload
            </button>
          </div>
          <div className="centre">
            <h1>Your Bmi is:{bmi}</h1>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Bmi;
