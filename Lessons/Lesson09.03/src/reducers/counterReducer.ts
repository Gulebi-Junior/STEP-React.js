import { increment, decrement, incrementRandom } from "./../actions/counterAction";
import { createReducer } from "@reduxjs/toolkit";

const initialState = { counter: 0 };

export const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(increment, (state) => {
            state.counter += 1;
        })
        .addCase(decrement, (state) => {
            state.counter += -1;
        })
        .addCase(incrementRandom, (state, action) => {
            state.counter += action.payload;
        });
});
