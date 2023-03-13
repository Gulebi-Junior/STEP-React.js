import { createSlice } from "@reduxjs/toolkit";

const initialState = { loading: true };

const loaderSlice = createSlice({
    name: "loader",
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true;
        },
        unsetLoading: (state) => {
            state.loading = false;
        },
    },
});

export const { setLoading, unsetLoading } = loaderSlice.actions;

export default loaderSlice.reducer;
