import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Vehicle } from "../../models/vehicle.ts";
import { addVehicle, deleteVehicle, updateVehicle } from "../../reducers/VehicleSlice.tsx";
import { VehicleTableComponent } from "./VehicleTableComponent";

export const VehicleFormComponent = () => {
    const dispatch = useDispatch();

    // Access the vehicles from Redux store
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

    return (
        <>
            <form className="mx-2 mt-6">
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
                            value={vehicleCode}
                            className="w-full p-2 border rounded border-blue-600"
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
                            className="w-full p-2 border rounded border-blue-600"
                            placeholder="ABC-1234"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="category"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
                        >
                            Category
                        </label>
                        <input
                            type="text"
                            id="category"
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                            className="w-full p-2 border rounded border-blue-600"
                            placeholder="Truck"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="fuel"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
                        >
                            Fuel
                        </label>
                        <input
                            type="text"
                            id="fuel"
                            onChange={(e) => setFuel(e.target.value)}
                            value={fuel}
                            className="w-full p-2 border rounded border-blue-600"
                            placeholder="Diesel"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="status"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
                        >
                            Status
                        </label>
                        <input
                            type="text"
                            id="status"
                            onChange={(e) => setStatus(e.target.value)}
                            value={status}
                            className="w-full p-2 border rounded border-blue-600"
                            placeholder="Active"
                            required
                        />
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
                            className="w-full p-2 border rounded border-blue-600"
                            placeholder="Good Condition"
                        />
                    </div>
                </div>
            </form>

            <div className="grid gap-5 md:grid-cols-3 mx-20">
                <button
                    type="button"
                    onClick={() => handleVehicleOperation("ADD_VEHICLE")}
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    Add Vehicle
                </button>
                <button
                    type="button"
                    onClick={() => handleVehicleOperation("UPDATE_VEHICLE")}
                    className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    Update Vehicle
                </button>
                <button
                    type="button"
                    onClick={() => handleVehicleOperation("DELETE_VEHICLE")}
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    Delete Vehicle
                </button>
            </div>

            <VehicleTableComponent vehicles={vehicles} />
        </>
    );
};
