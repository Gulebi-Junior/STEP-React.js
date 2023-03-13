import { createAction } from "@reduxjs/toolkit";

export const increment = createAction("INC");
export const decrement = createAction("DEC");
export const incrementRandom = createAction<number>("RND");
