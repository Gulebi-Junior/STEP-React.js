import { productsReducer } from "./reducers/productsReducer";
import { counterReducer } from "./reducers/counterReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: { counter: counterReducer, products: productsReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
