import {configureStore} from "@reduxjs/toolkit";
import VehicleSlice from "../reducers/VehicleSlice.tsx";
import FieldSlice from "../reducers/FieldSlice.tsx";

export const store = configureStore({
    reducer: {
        vehicle: VehicleSlice,
        field: FieldSlice,
    }
});