import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Vehicle } from '../models/vehicle';

const initialState: Vehicle[] = [];

const vehicleSlice = createSlice({
    name: 'vehicle',
    initialState,
    reducers: {
        addVehicle(state, action: PayloadAction<Vehicle>) {
            state.push(action.payload);
        },
        updateVehicle(state, action: PayloadAction<Vehicle>) {
            const index = state.findIndex(vehicle => vehicle.vehicle_code === action.payload.vehicle_code);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteVehicle(state, action: PayloadAction<string>) {
            return state.filter(vehicle => vehicle.vehicle_code !== action.payload);
        },
    },
});

export const { addVehicle, updateVehicle, deleteVehicle } = vehicleSlice.actions;
export default vehicleSlice.reducer;
