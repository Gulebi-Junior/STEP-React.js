import { createProductAction } from "./../actions/productsAction";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    list: [{ id: 1, name: "Milk", price: 1345 }],
};

export const productsReducer = createReducer(initialState, (builder) => {
    builder.addCase(createProductAction, (state, action) => {
        state.list.push({ id: state.list[state.list.length - 1].id + 1, ...action.payload });
    });
});
