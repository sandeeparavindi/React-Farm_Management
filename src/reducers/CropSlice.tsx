import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Crop } from "../models/crop";

const initialState: Crop[] = [];

const cropSlice = createSlice({
    name: "crop",
    initialState,
    reducers: {
        addCrop(state, action: PayloadAction<Crop>) {
            state.push(action.payload);
        },
        updateCrop(state, action: PayloadAction<Crop>) {
            const index = state.findIndex((crop) => crop.crop_code === action.payload.crop_code);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteCrop(state, action: PayloadAction<string>) {
            return state.filter((crop) => crop.crop_code !== action.payload);
        },
    },
});

export const { addCrop, updateCrop, deleteCrop } = cropSlice.actions;
export default cropSlice.reducer;
