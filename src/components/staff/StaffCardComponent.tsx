import { useSelector } from "react-redux";

export const StaffCardComponent = () => {
    const staffList = useSelector((state) => state.staff);

    return (
        <div className="p-6 grid gap-6 md:grid-cols-3 lg:grid-cols-4">
            {staffList.map((staff) => (
                <div
                    key={staff.staff_id}
                    className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white"
                >
                    <h2 className="text-lg font-semibold text-blue-600">
                        {staff.first_name} {staff.last_name}
                    </h2>
                    <p className="text-sm text-gray-700">ID: {staff.staff_id}</p>
                    <p className="text-sm text-gray-700">Designation: {staff.Designation}</p>
                    <p className="text-sm text-gray-700">Gender: {staff.Gender}</p>
                    <p className="text-sm text-gray-700">Joined: {staff.joined_date}</p>
                    <p className="text-sm text-gray-700">DOB: {staff.data_of_birth}</p>
                    <p className="text-sm text-gray-700">Mobile: {staff.mobile}</p>
                    <p className="text-sm text-gray-700">
                        Address: {staff.address_line1} {staff.address_line2} {staff.address_line3} {staff.address_line4} {staff.address_line5}</p>
                    <p className="text-sm text-gray-700">Vehicle: {staff.vehicle}</p>
                </div>
            ))}
        </div>
    );
};