import React from "react";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import "./Counter.css";

function Counter() {
    const count = useSelector<RootState, number>((state) => state.counter.counter);

    const dispatch = useDispatch();

    return (
        <div className="counter-container">
            <h3>Counter: {count}</h3>
            <div className="btns-row">
                <button
                    onClick={() => {
                        dispatch({ type: "INC" });
                    }}
                >
                    Increment
                </button>
                <button
                    onClick={() => {
                        dispatch({ type: "DEC" });
                    }}
                >
                    Decrement
                </button>
                <button
                    onClick={() => {
                        const randNum = Math.floor(Math.random() * (10 + 10) - 10);
                        dispatch({ type: "RAN", payload: randNum });
                    }}
                >
                    Random
                </button>
            </div>
        </div>
    );
}

export default Counter;
