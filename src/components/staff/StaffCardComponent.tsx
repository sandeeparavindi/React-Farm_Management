import {useDispatch, useSelector} from "react-redux";
import {FaTrashAlt} from "react-icons/fa";
import {deleteStaff} from "../../reducers/StaffSlice.tsx";

export const StaffCardComponent = () => {
    const staffList = useSelector((state) => state.staff);
    const dispatch = useDispatch();

    const handleDelete = (staffId: string) => {
        if (window.confirm(`Are you sure you want to delete equipment with ID: ${staffId}?`)) {
            dispatch(deleteStaff(staffId));
        }
    };
    return (
        <div className="p-6 grid gap-6 md:grid-cols-3 lg:grid-cols-4">
            {staffList.map((staff) => (
                <div
                    key={staff.staff_id}
                    className="flex flex-col justify-between p-4 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow bg-white min-h-[350px]"
                >
                    <div>
                        <p className="text-sm text-gray-700 mb-2">
                            <strong>ID:</strong> {staff.staff_id}
                        </p>
                        <p className="text-sm text-gray-700 mb-2">
                            <strong>Designation:</strong> {staff.Designation}
                        </p>
                        <p className="text-sm text-gray-700 mb-2">
                            <strong>Gender:</strong> {staff.Gender}
                        </p>
                        <p className="text-sm text-gray-700 mb-2">
                            <strong>Joined:</strong> {staff.joined_date}
                        </p>
                        <p className="text-sm text-gray-700 mb-2">
                            <strong>DOB:</strong> {staff.data_of_birth}
                        </p>
                        <p className="text-sm text-gray-700 mb-2">
                            <strong>Mobile:</strong> {staff.mobile}
                        </p>
                        <p className="text-sm text-gray-700 mb-2">
                            <strong>Address:</strong> {`${staff.address_line1} ${staff.address_line2} ${staff.address_line3} ${staff.address_line4} ${staff.address_line5}`}
                        </p>
                        <p className="text-sm text-gray-700 mb-2">
                            <strong>Vehicle:</strong> {staff.vehicle}
                        </p>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold text-blue-600 border-t pt-4 text-center">
                            {staff.first_name} {staff.last_name}
                        </h2>
                        <button
                            onClick={() => handleDelete(staff.staff_id)}
                            className="mt-4 flex items-center justify-center min-w-[335px] text-white bg-red-500 hover:bg-red-700 font-medium rounded-lg text-sm px-4 py-2 transition-colors duration-300"
                        >
                            <FaTrashAlt className="mr-2"/> Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};
