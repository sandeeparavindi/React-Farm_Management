import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Vehicle } from "../../models/vehicle.ts";
import { addVehicle, deleteVehicle, updateVehicle } from "../../reducers/VehicleSlice.tsx";
import { VehicleTableComponent } from "./VehicleTableComponent";

export const VehicleFormComponent = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const vehicles = useSelector((state) => state.vehicle);

    const [vehicleCode, setVehicleCode] = useState("");
    const [licensePlate, setLicensePlate] = useState("");
    const [category, setCategory] = useState("");
    const [fuel, setFuel] = useState("");
    const [status, setStatus] = useState("");
    const [remarks, setRemarks] = useState("");

    const handleVehicleOperation = (type: string) => {
        const newVehicle: Vehicle = {
            vehicle_code: vehicleCode,
            licen_plate: licensePlate,
            category,
            fuel,
            status,
            remarks,
        };

        switch (type) {
            case "ADD_VEHICLE":
                dispatch(addVehicle(newVehicle));
                clearForm();
                break;
            case "UPDATE_VEHICLE":
                dispatch(updateVehicle(newVehicle));
                clearForm();
                break;
            case "DELETE_VEHICLE":
                dispatch(deleteVehicle(vehicleCode));
                clearForm();
                break;
            default:
                break;
        }
    };

    const clearForm = () => {
        setVehicleCode("");
        setLicensePlate("");
        setCategory("");
        setFuel("");
        setStatus("");
        setRemarks("");
    };

    const handleSearchByCode = () => {
        const foundVehicle = vehicles.find(
            (vehicle: Vehicle) => vehicle.vehicle_code === vehicleCode
        );
        if (foundVehicle) {
            setLicensePlate(foundVehicle.licen_plate);
            setCategory(foundVehicle.category);
            setFuel(foundVehicle.fuel);
            setStatus(foundVehicle.status);
            setRemarks(foundVehicle.remarks);
        } else {
            alert("Vehicle not found");
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSearchByCode();
        }
    };


    return (
        <>
            <form className="mx-2 mt-6 p-4 rounded-lg bg-gradient-to-r from-gray-200 via-gray-100 to-gray-50">
                <div className="grid gap-6 mb-6 md:grid-cols-3">
                    <div>
                        <label
                            htmlFor="vehicle_code"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
                        >
                            Vehicle Code
                        </label>
                        <input
                            type="text"
                            id="vehicle_code"
                            onChange={(e) => setVehicleCode(e.target.value)}
                            onKeyDown={handleKeyDown}
                            value={vehicleCode}
                            className="w-full p-2 border rounded border-blue-400"
                            placeholder="V123"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="license_plate"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
                        >
                            License Plate
                        </label>
                        <input
                            type="text"
                            id="license_plate"
                            onChange={(e) => setLicensePlate(e.target.value)}
                            value={licensePlate}
                            className="w-full p-2 border rounded border-blue-400"
                            placeholder="ABC-1234"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="vehicleCategory"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
                        >
                            Category
                        </label>
                        <select
                            id="vehicleCategory"
                            className="w-full p-2 border rounded border-blue-400 mb-2"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        >
                            <option value="" disabled>
                                Select Vehicle Category
                            </option>
                            <option value="Car">Car</option>
                            <option value="Van">Van</option>
                            <option value="Motorbikes">Motorbikes</option>
                            <option value="Tractors-Land masters">Tractors-Land masters</option>
                            <option value="Tractors-4WD">Tractors-4WD</option>
                            <option value="Tankers truck">Tankers truck</option>
                            <option value="Land vehicles">Land vehicles</option>
                            <option value="Lorry">Lorry</option>
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="fuelType"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
                        >
                            Fuel Type
                        </label>
                        <select
                            id="fuelType"
                            className="w-full p-2 border rounded border-blue-400"
                            value={fuel}
                            onChange={(e) => setFuel(e.target.value)}
                            required
                        >
                            <option value="" disabled>
                                Select Fuel Type
                            </option>
                            <option value="Petrol">Petrol</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Kerosene">Kerosene</option>
                            <option value="Fuel oil">Fuel oil</option>
                            <option value="Bitumen">Bitumen</option>
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="vehicleStatus"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
                        >
                            Status
                        </label>
                        <select
                            id="vehicleStatus"
                            className="w-full p-2 border rounded border-blue-400"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            required
                        >
                            <option value="" disabled>
                                Select Status
                            </option>
                            <option value="Available">Available</option>
                            <option value="Out of Service">Out of Service</option>
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="remarks"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
                        >
                            Remarks
                        </label>
                        <input
                            type="text"
                            id="remarks"
                            onChange={(e) => setRemarks(e.target.value)}
                            value={remarks}
                            className="w-full p-2 border rounded border-blue-400 mb-4"
                            placeholder="Good Condition"
                        />
                    </div>
                </div>
            </form>

            <div className="grid gap-5 md:grid-cols-4 mx-20 mt-8">
                <button
                    type="button"
                    onClick={() => handleVehicleOperation("ADD_VEHICLE")}
                    className="w-full text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    Add Vehicle
                </button>
                <button
                    type="button"
                    onClick={() => handleVehicleOperation("UPDATE_VEHICLE")}
                    className="w-full text-white bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    Update Vehicle
                </button>
                <button
                    type="button"
                    onClick={() => clearForm()}
                    className="w-full text-white bg-purple-500 hover:bg-purple-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Clear Form
                </button>
                <button
                    type="button"
                    onClick={() => handleVehicleOperation("DELETE_VEHICLE")}
                    className="w-full text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    Delete Vehicle
                </button>
            </div>


            <VehicleTableComponent vehicles={vehicles}/>
        </>
    );
};
