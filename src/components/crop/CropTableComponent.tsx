import { Crop } from "../../models/crop.ts";

export const CropTableComponent = ({ crops = [] }: { crops?: Crop[] }) => {
    return (
        <div className="overflow-x-auto mx-2 mt-7 bg-gradient-to-r from-white to-light-blue-100 p-4 rounded-lg shadow-lg">
            <table className="min-w-full border-collapse border border-gray-200 bg-white shadow-md sm:rounded-lg">
                <thead>
                <tr className="bg-gray-100 text-gray-600 text-sm uppercase tracking-wider">
                    <th className="px-6 py-3 text-left font-medium">Crop Code</th>
                    <th className="px-6 py-3 text-left font-medium">Common Name</th>
                    <th className="px-6 py-3 text-left font-medium">Scientific Name</th>
                    <th className="px-6 py-3 text-left font-medium">Category</th>
                    <th className="px-6 py-3 text-left font-medium">Season</th>
                    <th className="px-6 py-3 text-left font-medium">Crop Image</th>
                </tr>
                </thead>
                <tbody>
                {crops.length > 0 ? (
                    crops.map((crop: Crop, index: number) => (
                        <tr
                            key={index}
                            className="hover:bg-gray-100 even:bg-gray-50 odd:bg-white text-gray-700 border-t"
                        >
                            <td className="px-6 py-4">{crop.crop_code}</td>
                            <td className="px-6 py-4">{crop.common_name}</td>
                            <td className="px-6 py-4">{crop.scientific_name}</td>
                            <td className="px-6 py-4">{crop.category}</td>
                            <td className="px-6 py-4">{crop.season}</td>
                            <td className="px-6 py-4">
                                {crop.crop_image ? (
                                    <img
                                        src={crop.crop_image}
                                        alt="Crop Image"
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
                            No crops available.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};
