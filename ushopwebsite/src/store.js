import { configureStore } from "@reduxjs/toolkit";
import amountReducer from "./state/reducer/amountreducer";

const store=configureStore({
    reducer: {amountReducer:amountReducer}
})
export default store