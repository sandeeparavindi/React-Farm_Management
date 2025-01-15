import { Vehicle } from "../../models/vehicle.ts";

export const VehicleTableComponent = ({ vehicles }: { vehicles: Vehicle[] }) => {
    return (
        <div className="overflow-x-auto mx-2 mt-7">
            <table className="min-w-full border-collapse border border-gray-200 bg-white shadow-md sm:rounded-lg">
                <thead>
                <tr className="bg-gray-100 text-gray-600 text-sm uppercase tracking-wider">
                    <th className="px-6 py-3 text-left font-medium">Vehicle Code</th>
                    <th className="px-6 py-3 text-left font-medium">License Plate</th>
                    <th className="px-6 py-3 text-left font-medium">Category</th>
                    <th className="px-6 py-3 text-left font-medium">Fuel</th>
                    <th className="px-6 py-3 text-left font-medium">Status</th>
                    <th className="px-6 py-3 text-left font-medium">Remarks</th>
                </tr>
                </thead>
                <tbody>
                {vehicles.map((vehicle: Vehicle, index: number) => (
                    <tr
                        key={index}
                        className="hover:bg-gray-100 even:bg-gray-50 odd:bg-white text-gray-700 border-t"
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
