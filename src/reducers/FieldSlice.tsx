import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Field } from "../models/field";

const initialState: Field[] = [];

const fieldSlice = createSlice({
    name: "field",
    initialState,
    reducers: {
        addField(state, action: PayloadAction<Field>) {
            state.push(action.payload);
        },
        updateField(state, action: PayloadAction<Field>) {
            const index = state.findIndex((field) => field.field_code === action.payload.field_code);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteField(state, action: PayloadAction<string>) {
            return state.filter((field) => field.field_code !== action.payload);
        },
    },
});

export const { addField, updateField, deleteField } = fieldSlice.actions;
export default fieldSlice.reducer;
