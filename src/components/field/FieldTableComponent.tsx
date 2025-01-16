import {Field} from "../../models/field.ts";

export const FieldTableComponent = ({ fields = [] }: { fields?: Field[] }) => {
    return (
        <div className="overflow-x-auto mx-2 mt-7 bg-gradient-to-r from-white to-light-blue-100 p-4 rounded-lg shadow-lg">
            <table className="min-w-full border-collapse border border-gray-200 bg-white shadow-md sm:rounded-lg">
                <thead>
                <tr className="bg-gray-100 text-gray-600 text-sm uppercase tracking-wider">
                    <th className="px-6 py-3 text-left font-medium">Field Code</th>
                    <th className="px-6 py-3 text-left font-medium">Field Name</th>
                    <th className="px-6 py-3 text-left font-medium">Location</th>
                    <th className="px-6 py-3 text-left font-medium">Field Size</th>
                    <th className="px-6 py-3 text-left font-medium">Field Image 1</th>
                    <th className="px-6 py-3 text-left font-medium">Field Image 2</th>
                </tr>
                </thead>
                <tbody>
                {fields.length > 0 ? (
                    fields.map((field: Field, index: number) => (
                        <tr
                            key={index}
                            className="hover:bg-gray-100 even:bg-gray-50 odd:bg-white text-gray-700 border-t"
                        >
                            <td className="px-6 py-4">{field.field_code}</td>
                            <td className="px-6 py-4">{field.field_name}</td>
                            <td className="px-6 py-4">{field.location}</td>
                            <td className="px-6 py-4">{field.field_size}</td>
                            <td className="px-6 py-4">
                                {field.field_image1 ? (
                                    <img
                                        src={field.field_image1}
                                        alt="Field Image 1"
                                        className="h-16 w-16 object-cover rounded"
                                    />
                                ) : (
                                    "No Image"
                                )}
                            </td>
                            <td className="px-6 py-4">
                                {field.field_image2 ? (
                                    <img
                                        src={field.field_image2}
                                        alt="Field Image 2"
                                        className="h-16 w-16 object-cover rounded"
                                    />
                                ) : (
                                    "No Image"
                                )}
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={6} className="text-center py-4 text-gray-500">
                            No fields available.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};
