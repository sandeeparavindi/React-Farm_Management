import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Staff } from "../models/staff";

const initialState: Staff[] = [];

const staffSlice = createSlice({
    name: "staff",
    initialState,
    reducers: {
        addStaff(state, action: PayloadAction<Staff>) {
            state.push(action.payload);
        },
        updateStaff(state, action: PayloadAction<Staff>) {
            const index = state.findIndex((staff) => staff.staff_id === action.payload.staff_id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteStaff(state, action: PayloadAction<string>) {
            return state.filter((staff) => staff.staff_id !== action.payload);
        },
    },
});

export const { addStaff, updateStaff, deleteStaff } = staffSlice.actions;
export default staffSlice.reducer;
