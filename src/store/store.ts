import {configureStore} from "@reduxjs/toolkit";
import VehicleSlice from "../reducers/VehicleSlice.tsx";
import FieldSlice from "../reducers/FieldSlice.tsx";
import CropSlice from "../reducers/CropSlice.tsx";
import StaffSlice from "../reducers/StaffSlice.tsx";
import EquipmentSlice from "../reducers/EquipmentSlice.tsx";
import LogSlice from "../reducers/LogSlice.tsx";

export const store = configureStore({
    reducer: {
        vehicle: VehicleSlice,
        field: FieldSlice,
        crop: CropSlice,
        staff: StaffSlice,
        equipment: EquipmentSlice,
        log: LogSlice,
    }
});