import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from '../../features/counter/counterSlice';
import './Counter.css';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2);

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <div className="counter-value">{count}</div>
      <div className="buttons-container">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
      <div className="increment-by-amount">
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
        />
        <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>
          Increment by {incrementAmount}
        </button>
      </div>
    </div>
  );
};

export default Counter;
