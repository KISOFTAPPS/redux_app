import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./store/slices/counter";

const App = () => {
    const { counter } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const incrementBy = 10

    return (
        <div>
          <h1>Count is: {counter}</h1>
            <button type="button" onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button type="button" onClick={() => dispatch(decrement())}>
                Dercrement
            </button>
            <button type="button" onClick={() => dispatch(incrementByAmount(incrementBy))}>
            Increment by {incrementBy}
            </button>
        </div>
    );
};

export default App;
