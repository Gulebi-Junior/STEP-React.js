import { IProduct } from "../types/index";
import { createAction } from "@reduxjs/toolkit";

export const createProductAction = createAction<IProduct>("PRODUCTS_CREATE");
