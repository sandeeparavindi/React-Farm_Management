import { useDispatch, useSelector } from "react-redux";
import { Equipment } from "../../models/equipment";
import { deleteEquipment } from "../../reducers/EquipmentSlice";
import { FaTrashAlt } from "react-icons/fa";

export const EquipmentCardComponent = () => {
    const dispatch = useDispatch();
    const equipments = useSelector((state: any) => state.equipment);

    const handleDelete = (equipmentId: string) => {
        if (window.confirm(`Are you sure you want to delete equipment with ID: ${equipmentId}?`)) {
            dispatch(deleteEquipment(equipmentId));
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 p-4">
            {equipments.map((equipment: Equipment) => (
                <div
                    key={equipment.equipment_id}
                    className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-4 border border-gray-200"
                >
                    <div className="border-b pb-2 mb-4">
                        <h3 className="text-lg font-bold text-gray-800">
                            {equipment.equipment_name}
                        </h3>
                        <p className="text-sm text-gray-600">
                            ID: {equipment.equipment_id}
                        </p>
                    </div>
                    <p className="text-sm text-gray-600">
                        <strong>Type:</strong> {equipment.equipment_type}
                    </p>
                    <p className="text-sm text-gray-600">
                        <strong>Status:</strong> {equipment.status}
                    </p>
                    <p className="text-sm text-gray-600">
                        <strong>Field:</strong> {equipment.field || "N/A"}
                    </p>
                    <p className="text-sm text-gray-600">
                        <strong>Staff:</strong> {equipment.staff || "N/A"}
                    </p>
                    <button
                        onClick={() => handleDelete(equipment.equipment_id)}
                        className="mt-4 flex items-center justify-center min-w-[100px] text-white bg-red-500 hover:bg-red-700 font-medium rounded-lg text-sm px-4 py-2 transition-colors duration-300"
                    >
                        <FaTrashAlt className="mr-2" /> Delete
                    </button>
                </div>
            ))}
        </div>
    );
};
