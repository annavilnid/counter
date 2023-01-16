import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "../Counter/Counter";
import {Settings} from "../Settings/Settings";
import {Button} from "../Button/Button";
import {CounterModule} from "../CounterModule/CounterModule"
import { useSelector, useDispatch } from 'react-redux'
import {incrementAC, resetAC, setLimitsAC} from "../store/counter-redusers";
import {ReduxStateType} from "../store/store";

function App() {
  const stateMinValue = useSelector<ReduxStateType, number>(state => state.minValue)
  const stateMaxValue = useSelector<ReduxStateType, number>(state => state.maxValue)
  const stateCounterValue = useSelector<ReduxStateType, number>(state => state.counterValue)
  const dispatch = useDispatch()
  const counterValue = stateCounterValue
  const [minValue, setMinValue] = useState(stateMinValue)
  const [maxValue, setMaxValue] = useState(stateMaxValue)
  const [message, setMessage] = useState('');
  const [showSettings, setShowSettings] = useState(false);

  const increaseCounterValueHandler = () => {
    if (counterValue < maxValue) {
      dispatch(incrementAC())
    }
  }

  const resetCounterValueHandler = () => {
    dispatch(resetAC())
  }

  const addClassCounter = () => {
    return counterValue >= maxValue || message === 'Incorrect value!'? "red span" : "span"
  }

  let disableSet =  minValue < 0 || maxValue <= minValue || minValue > counterValue || maxValue < counterValue;

  let disableInc = counterValue === maxValue || typeof(counterValue) === "string" || message !== '';

  let disableReset = counterValue === minValue || typeof(counterValue) === "string" || message !== '';

  const addClassInput = maxValue <= minValue;

  const setHandler = () => {
    setShowSettings(!showSettings);
    dispatch(setLimitsAC(minValue, maxValue))
    setMessage('');
  }

  const minHandler = (valueInput: number) => {
    let newMinValue = valueInput
    createString(newMinValue, maxValue, counterValue);
    setMinValue(newMinValue)
  }

  const maxHandler = (valueInput: number) => {
    let newMaxValue = valueInput
    createString(minValue, newMaxValue, counterValue);
    setMaxValue(newMaxValue)
  }

  const createString = (min: number, max: number, value: number) => {
    if (min < 0 || max <= min || value > max || value < min ) {
      setMessage('Incorrect value!');
    } else {
      setMessage('Inter value and press \'set\'');
    }
  }

  return (
    <div className="App">

      <CounterModule>
        <div className="module">
          <div className="monitor_wrapper">
            <Counter
              message={message}
              value={counterValue}
              className={addClassCounter}
            />
          </div>
          <div>
            <div className="button_wrapper">
              <Button
                onClick={increaseCounterValueHandler}
                isDisabled={disableInc}
                title="inc"
              />
              <Button
                onClick={resetCounterValueHandler}
                isDisabled={disableReset}
                title="reset"
              />
            </div>
          </div>
        </div>
      </CounterModule>

      <CounterModule>
        <div className="module">
          <div className="monitor_wrapper">
            <Settings
              minValue={minValue}
              minHandler={minHandler}
              maxValue={maxValue}
              maxHandler={maxHandler}
              addClassInput={addClassInput}
            />
          </div>
          <div className="button_wrapper">
            <Button
              onClick={setHandler}
              isDisabled={disableSet}
              title="set"
            />
          </div>
        </div>
      </CounterModule>

    <CounterModule>
      <div className="module">
        <div className="monitor_wrapper">
          {showSettings ?
            <Settings
              minValue={minValue}
              minHandler={minHandler}
              maxValue={maxValue}
              maxHandler={maxHandler}
              addClassInput={addClassInput}
            /> :
            <Counter
              message={message}
              value={counterValue}
              className={addClassCounter}
            />
          }
          </div>
        <div className="button_wrapper">
          {!showSettings && (
            <>
              <Button
                onClick={increaseCounterValueHandler}
                isDisabled={disableInc}
                title="inc"
              />
              <Button
                onClick={resetCounterValueHandler}
                isDisabled={disableReset}
                title="reset"
              />
            </>
            )}
          <Button
            onClick={setHandler}
            isDisabled={disableSet}
            title="set"
          />
        </div>
      </div>
    </CounterModule>
    </div>
  );
}

export default App;
