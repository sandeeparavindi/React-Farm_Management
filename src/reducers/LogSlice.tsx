import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Monitoring_log} from "../models/monitoring_log.ts";

const initialState: Monitoring_log[] = [];

const logSlice = createSlice({
    name: "log",
    initialState,
    reducers: {
        addLog(state, action: PayloadAction<Monitoring_log>) {
            state.push(action.payload);
        },
        updateLog(state, action: PayloadAction<Monitoring_log>) {
            const index = state.findIndex((log) => log.log_code === action.payload.log_code);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteLog(state, action: PayloadAction<string>) {
            return state.filter((log) => log.log_code !== action.payload);
        },
    },
});

export const { addLog, updateLog, deleteLog } = logSlice.actions;
export default logSlice.reducer;
