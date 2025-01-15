import { Vehicle } from "../../models/vehicle.ts";

export const VehicleTableComponent = ({ vehicles }: { vehicles: Vehicle[] }) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-2 mt-7">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th className="px-6 py-3">Vehicle Code</th>
                    <th className="px-6 py-3">License Plate</th>
                    <th className="px-6 py-3">Category</th>
                    <th className="px-6 py-3">Fuel</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Remarks</th>
                </tr>
                </thead>
                <tbody>
                {vehicles.map((vehicle: Vehicle, index: number) => (
                    <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td className="px-6 py-4">{vehicle.vehicle_code}</td>
                        <td className="px-6 py-4">{vehicle.licen_plate}</td>
                        <td className="px-6 py-4">{vehicle.category}</td>
                        <td className="px-6 py-4">{vehicle.fuel}</td>
                        <td className="px-6 py-4">{vehicle.status}</td>
                        <td className="px-6 py-4">{vehicle.remarks}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
