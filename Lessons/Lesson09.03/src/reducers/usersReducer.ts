import { IUser, IUsersReduser } from "../types";
import { fetchUsers } from "./../actions/usersActions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IUsersReduser = {
    users: [],
    status: "idle",
    error: null,
};

const usersResucer = createSlice({
    name: "users",
    initialState,
    reducers: {
        loadUsers: (state, action) => {
            state.users = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                console.log({ action });
                state.status = "fulfilled";
                state.users = action.payload;
            })
            .addCase(fetchUsers.pending, (state) => {
                state.status = "pending";
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.error;
            });
    },
});

export default usersResucer.reducer;
