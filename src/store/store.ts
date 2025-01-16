import {configureStore} from "@reduxjs/toolkit";
import VehicleSlice from "../reducers/VehicleSlice.tsx";
import FieldSlice from "../reducers/FieldSlice.tsx";
import CropSlice from "../reducers/CropSlice.tsx";

export const store = configureStore({
    reducer: {
        vehicle: VehicleSlice,
        field: FieldSlice,
        crop: CropSlice,
    }
});