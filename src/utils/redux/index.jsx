import { configureStore } from "@reduxjs/toolkit";
import barangReducer from "./slice";

const store = configureStore({ reducer: { barang: barangReducer } });

export default store;
