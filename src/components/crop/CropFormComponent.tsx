import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Crop } from "../../models/crop";
import { addCrop, deleteCrop, updateCrop } from "../../reducers/CropSlice";
import { CropTableComponent } from "./CropTableComponent";
import { Field } from "../../models/field";

export const CropFormComponent = () => {
    const dispatch = useDispatch();
    const crops = useSelector((state: any) => state.crop);
    const fields = useSelector((state: any) => state.field);

    const [cropCode, setCropCode] = useState("");
    const [commonName, setCommonName] = useState("");
    const [scientificName, setScientificName] = useState("");
    const [category, setCategory] = useState("");
    const [season, setSeason] = useState("");
    const [fieldCode, setFieldCode] = useState("");
    const [fieldName, setFieldName] = useState("");
    const [cropImage, setCropImage] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const categories = ["Rice", "Cereal", "Vegetable", "Fruit"];
    const seasons = ["Winter", "Summer", "Autumn", "Spring"];

    const handleFieldCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedFieldCode = e.target.value;
        setFieldCode(selectedFieldCode);

        const field = fields.find((f: Field) => f.field_code === selectedFieldCode);
        setFieldName(field ? field.field_name : "");
    };

    const handleCropOperation = (type: string) => {
        if (!cropCode) {
            alert("Please enter a crop code.");
            return;
        }

        const crop = crops.find((c: Crop) => c.crop_code === cropCode);
        if (type === "DELETE_CROP" && !crop) {
            alert("Crop not found.");
            return;
        }

        const newCrop: Crop = {
            crop_code: cropCode,
            common_name: commonName,
            scientific_name: scientificName,
            category,
            season,
            field: fieldName,
            field_code: fieldCode,
            crop_image: previewImage || "",
        };

        switch (type) {
            case "ADD_CROP":
                dispatch(addCrop(newCrop));
                break;
            case "UPDATE_CROP":
                dispatch(updateCrop(newCrop));
                break;
            case "DELETE_CROP":
                dispatch(deleteCrop(cropCode));
                break;
            default:
                break;
        }
        clearForm();
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setCropImage(file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const handleSearch = () => {
        const crop = crops.find((c: Crop) => c.crop_code === cropCode);
        if (crop) {
            setCommonName(crop.common_name);
            setScientificName(crop.scientific_name);
            setCategory(crop.category);
            setSeason(crop.season);
            setFieldCode(crop.field_code);
            setFieldName(crop.field);
            setPreviewImage(crop.crop_image);
        } else {
            alert("Crop not found.");
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
        }
    };

    const clearForm = () => {
        setCropCode("");
        setCommonName("");
        setScientificName("");
        setCategory("");
        setSeason("");
        setFieldCode("");
        setFieldName("");
        setCropImage(null);
        setPreviewImage(null);
    };

    return (
        <>
            <form className="mx-2 mt-6 p-4 rounded-lg bg-gradient-to-r from-gray-200 via-gray-100 to-gray-50">
                <div className="grid gap-6 mb-6 md:grid-cols-3">
                    <div>
                        <label htmlFor="crop_code" className="block mb-2 text-sm font-medium text-gray-900">
                            Crop Code
                        </label>
                        <input
                            type="text"
                            id="crop_code"
                            value={cropCode}
                            onChange={(e) => setCropCode(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="w-full p-2 border rounded border-blue-400"
                            placeholder="C123"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="common_name" className="block mb-2 text-sm font-medium text-gray-900">
                            Common Name
                        </label>
                        <input
                            type="text"
                            id="common_name"
                            value={commonName}
                            onChange={(e) => setCommonName(e.target.value)}
                            className="w-full p-2 border rounded border-blue-400"
                            placeholder="Wheat"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="scientific_name" className="block mb-2 text-sm font-medium text-gray-900">
                            Scientific Name
                        </label>
                        <input
                            type="text"
                            id="scientific_name"
                            value={scientificName}
                            onChange={(e) => setScientificName(e.target.value)}
                            className="w-full p-2 border rounded border-blue-400"
                            placeholder="Triticum aestivum"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">
                            Category
                        </label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full p-2 border rounded border-blue-400"
                            required
                        >
                            <option value="">Select Category</option>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="season" className="block mb-2 text-sm font-medium text-gray-900">
                            Season
                        </label>
                        <select
                            id="season"
                            value={season}
                            onChange={(e) => setSeason(e.target.value)}
                            className="w-full p-2 border rounded border-blue-400"
                            required
                        >
                            <option value="">Select Season</option>
                            {seasons.map((seasonOption) => (
                                <option key={seasonOption} value={seasonOption}>
                                    {seasonOption}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="field_code" className="block mb-2 text-sm font-medium text-gray-900">
                            Field Code
                        </label>
                        <select
                            className="w-full p-2 border rounded border-blue-400"
                            value={fieldCode}
                            onChange={handleFieldCodeChange}
                            required
                        >
                            <option value="">Select Field Code</option>
                            {fields.map((field: Field) => (
                                <option key={field.field_code} value={field.field_code}>
                                    {field.field_code}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="field_name" className="block mb-2 text-sm font-medium text-gray-900">
                            Field Name
                        </label>
                        <input
                            type="text"
                            value={fieldName}
                            placeholder="Field Name"
                            readOnly
                            className="w-full p-2 border rounded border-blue-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="crop_image" className="block mb-2 text-sm font-medium text-gray-900">
                            Crop Image
                        </label>
                        <input
                            type="file"
                            id="crop_image"
                            onChange={handleImageChange}
                            className="w-full p-2 border rounded border-blue-400"
                            accept="image/*"
                        />
                        {previewImage && <img src={previewImage} alt="Preview" className="mt-2 h-20" />}
                    </div>
                </div>
            </form>

            <div className="grid gap-5 md:grid-cols-3 mx-20 mt-8">
                <button
                    type="button"
                    onClick={() => handleCropOperation("ADD_CROP")}
                    className="w-full text-white bg-green-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Add Crop
                </button>
                <button
                    type="button"
                    onClick={() => handleCropOperation("UPDATE_CROP")}
                    className="w-full text-white bg-yellow-500 hover:bg-yellow-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Update Crop
                </button>
                <button
                    type="button"
                    onClick={() => handleCropOperation("DELETE_CROP")}
                    className="w-full text-white bg-red-500 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Delete Crop
                </button>
            </div>

            <CropTableComponent crops={crops} />
        </>
    );
};
