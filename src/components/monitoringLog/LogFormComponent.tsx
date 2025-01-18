import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLog, updateLog, deleteLog } from "../../reducers/LogSlice";
import { Field } from "../../models/field";
import { Crop } from "../../models/crop";
import { Staff } from "../../models/staff";
import {Monitoring_log} from "../../models/monitoring_log.ts";
import {LogCardComponent} from "./LogCardComponet.tsx";

export const LogFormComponent = () => {
    const dispatch = useDispatch();
    const logs = useSelector((state: any) => state.log);
    const fields = useSelector((state: any) => state.field);
    const crops = useSelector((state: any) => state.crop);
    const staffMembers = useSelector((state: any) => state.staff);

    const [logCode, setLogCode] = useState("");
    const [logDate, setLogDate] = useState("");
    const [observation, setObservation] = useState("");
    const [fieldCode, setFieldCode] = useState("");
    const [fieldName, setFieldName] = useState("");
    const [cropCode, setCropCode] = useState("");
    const [cropCategory, setCropCategory] = useState("");
    const [staffId, setStaffId] = useState("");
    const [staffFirstName, setStaffFirstName] = useState("");
    const [logImage, setLogImage] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const handleFieldCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedFieldCode = e.target.value;
        setFieldCode(selectedFieldCode);

        const field = fields.find((f: Field) => f.field_code === selectedFieldCode);
        setFieldName(field ? field.field_name : "");
    };

    const handleCropCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCropCode = e.target.value;
        setCropCode(selectedCropCode);

        const crop = crops.find((c: Crop) => c.crop_code === selectedCropCode);
        setCropCategory(crop ? crop.category : "");
    };

    const handleStaffIdChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedStaffId = e.target.value;
        setStaffId(selectedStaffId);

        const staff = staffMembers.find((s: Staff) => s.staff_id === selectedStaffId);
        setStaffFirstName(staff ? staff.first_name : "");
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setLogImage(file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const handleLogOperation = (type: string) => {
        if (!logCode) {
            alert("Please enter a log code.");
            return;
        }

        const log = logs.find((l: Monitoring_log) => l.log_code === logCode);
        if (type === "DELETE_LOG" && !log) {
            alert("Log not found.");
            return;
        }

        const newLog: Monitoring_log = {
            log_code: logCode,
            log_date: logDate,
            observation,
            field: fieldName,
            crop: cropCategory,
            staff: staffFirstName,
            log_image: previewImage || "",
        };

        switch (type) {
            case "ADD_LOG":
                dispatch(addLog(newLog));
                break;
            case "UPDATE_LOG":
                dispatch(updateLog(newLog));
                break;
            case "DELETE_LOG":
                dispatch(deleteLog(logCode));
                break;
            default:
                break;
        }
        clearForm();
    };

    const handleSearch = () => {
        const log = logs.find((l: Monitoring_log) => l.log_code === logCode);
        if (log) {
            setLogDate(log.log_date);
            setObservation(log.observation);
            setFieldName(log.field);
            setFieldCode(fields.find((f: Field) => f.field_name === log.field)?.field_code || "");
            setCropCategory(log.crop);
            setCropCode(crops.find((c: Crop) => c.category === log.crop)?.crop_code || "");
            setStaffFirstName(log.staff);
            setStaffId(staffMembers.find((s: Staff) => s.first_name === log.staff)?.staff_id || "");
            setPreviewImage(log.log_image);
        } else {
            alert("Log not found.");
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
        }
    };

    const clearForm = () => {
        setLogCode("");
        setLogDate("");
        setObservation("");
        setFieldCode("");
        setFieldName("");
        setCropCode("");
        setCropCategory("");
        setStaffId("");
        setStaffFirstName("");
        setLogImage(null);
        setPreviewImage(null);
    };

    return (
        <>
            <form className="mx-2 mt-6 p-4 rounded-lg bg-gradient-to-r from-gray-200 via-gray-100 to-gray-50">
                <div className="grid gap-6 mb-6 md:grid-cols-4">
                    <div>
                        <label htmlFor="log_code" className="block mb-2 text-sm font-medium text-gray-900">
                            Log Code
                        </label>
                        <input
                            type="text"
                            id="log_code"
                            value={logCode}
                            onChange={(e) => setLogCode(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="w-full p-2 border rounded border-blue-400"
                            placeholder="L123"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="log_date" className="block mb-2 text-sm font-medium text-gray-900">
                            Log Date
                        </label>
                        <input
                            type="date"
                            id="log_date"
                            value={logDate}
                            onChange={(e) => setLogDate(e.target.value)}
                            className="w-full p-2 border rounded border-blue-400"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="observation" className="block mb-2 text-sm font-medium text-gray-900">
                            Observation
                        </label>
                        <textarea
                            id="observation"
                            value={observation}
                            onChange={(e) => setObservation(e.target.value)}
                            className="w-full p-2 border rounded border-blue-400"
                            placeholder="Observation details"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="field_code" className="block mb-2 text-sm font-medium text-gray-900">
                            Field Code
                        </label>
                        <select
                            value={fieldCode}
                            onChange={handleFieldCodeChange}
                            className="w-full p-2 border rounded border-blue-400"
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
                        <label htmlFor="crop_code" className="block mb-2 text-sm font-medium text-gray-900">
                            Crop Code
                        </label>
                        <select
                            value={cropCode}
                            onChange={handleCropCodeChange}
                            className="w-full p-2 border rounded border-blue-400"
                            required
                        >
                            <option value="">Select Crop Code</option>
                            {crops.map((crop: Crop) => (
                                <option key={crop.crop_code} value={crop.crop_code}>
                                    {crop.crop_code}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="crop_category" className="block mb-2 text-sm font-medium text-gray-900">
                            Crop Category
                        </label>
                        <input
                            type="text"
                            value={cropCategory}
                            placeholder="Crop Category"
                            readOnly
                            className="w-full p-2 border rounded border-blue-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="staff_id" className="block mb-2 text-sm font-medium text-gray-900">
                            Staff ID
                        </label>
                        <select
                            value={staffId}
                            onChange={handleStaffIdChange}
                            className="w-full p-2 border rounded border-blue-400"
                            required
                        >
                            <option value="">Select Staff ID</option>
                            {staffMembers.map((staff: Staff) => (
                                <option key={staff.staff_id} value={staff.staff_id}>
                                    {staff.staff_id}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="staff_first_name" className="block mb-2 text-sm font-medium text-gray-900">
                            Staff First Name
                        </label>
                        <input
                            type="text"
                            value={staffFirstName}
                            placeholder="Staff First Name"
                            readOnly
                            className="w-full p-2 border rounded border-blue-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="log_image" className="block mb-2 text-sm font-medium text-gray-900">
                            Log Image
                        </label>
                        <input
                            type="file"
                            id="log_image"
                            onChange={handleImageChange}
                            className="w-full p-2 border rounded border-blue-400"
                            accept="image/*"
                        />
                        {previewImage && <img src={previewImage} alt="Preview" className="mt-2 h-20"/>}
                    </div>
                </div>
            </form>
            <div className="grid gap-5 md:grid-cols-3 mx-20 mt-8">
                <button
                    type="button"
                    onClick={() => handleLogOperation("ADD_LOG")}
                    className="w-full text-white bg-green-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Add Log
                </button>
                <button
                    type="button"
                    onClick={() => handleLogOperation("UPDATE_LOG")}
                    className="w-full text-white bg-yellow-500 hover:bg-yellow-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Update Log
                </button>
                <button
                    type="button"
                    onClick={() => clearForm()}
                    className="w-full text-white bg-purple-500 hover:bg-purple-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Clear Form
                </button>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                {logs.map((log: Monitoring_log) => (
                    <LogCardComponent key={log.log_code} log={log}/>
                ))}
            </div>
        </>

    );
};
