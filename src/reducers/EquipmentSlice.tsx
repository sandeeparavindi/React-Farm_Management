import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Equipment } from "../models/equipment";

const initialState: Equipment[] = [];

const equipmentSlice = createSlice({
    name: "equipment",
    initialState,
    reducers: {
        addEquipment(state, action: PayloadAction<Equipment>) {
            state.push(action.payload);
        },
        updateEquipment(state, action: PayloadAction<Equipment>) {
            const index = state.findIndex((equipment) => equipment.equipment_id === action.payload.equipment_id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteEquipment(state, action: PayloadAction<string>) {
            return state.filter((equipment) => equipment.equipment_id !== action.payload);
        },
    },
});

export const { addEquipment, updateEquipment, deleteEquipment } = equipmentSlice.actions;
export default equipmentSlice.reducer;
