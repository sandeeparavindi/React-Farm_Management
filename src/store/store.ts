import {configureStore} from "@reduxjs/toolkit";
import VehicleSlice from "../reducers/VehicleSlice.tsx";

export const store = configureStore({
    reducer: {
        vehicle: VehicleSlice,
    }
});