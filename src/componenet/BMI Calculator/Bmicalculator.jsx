import React, { useState } from "react";
import { useReducer } from "react";
import "./Bmi.css";

const reducer = (state, action) => {
  if (action.type === "calculate") {
    const BMI =
      (Number(action.payload?.Weight) /
        (Number(action.payload?.height) * Number(action.payload?.height))) *
      10000;

    return { ...state, BMI: Math.floor(BMI) };
  }
};

const Bmicalculator = () => {
  const [state, setstate] = useState({ height: 76, Weight: 170 });

  const [State, dispatch] = useReducer(reducer, { BMI: 0 });

  const handlechange = (e) => {
    setstate((oldval) => {
      return {
        ...oldval,
        [e.target.name]: e.target.value,
      };
    });
    dispatch({ type: "calculate", payload: state });
  };

  return (
    <div>
      <div className="sm:text-[40px] text-[30px] w-[100%] text-center font-semibold">
        BMI Calculator
      </div>
      <div className="bmi-container">
        <div className="bmi-result">
          <p className="bmi-result-num"> Over weight : {State.BMI}</p>
          <p className="Condition">NORMAL</p>
        </div>
        <div className="bmi-computing">
          <h4>WHAT'S YOUR BMI?</h4>
          <hr />
          <div className="range-weight">
            <input
              type="range"
              name="height"
              id="height"
              min="100"
              max="250"
              value={state.height}
              onChange={handlechange}
            />
            <span className="height-span">{state.height}</span>
          </div>
          <div className="range-height">
            <input
              type="range"
              name="Weight"
              id="Weight"
              min="0"
              max="250"
              value={state.Weight}
              onChange={handlechange}
            />
            <span className="weight-span">{state.Weight}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bmicalculator;
