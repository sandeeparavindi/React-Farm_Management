export class Vehicle {
    vehicle_code: string;
    licen_plate: string;
    category: string;
    fuel: string;
    status: string;
    remarks: string;

    constructor(vehicle_code: string, licen_plate: string, category: string, fuel: string, status: string,remarks: string) {
        this.vehicle_code = vehicle_code;
        this.licen_plate = licen_plate;
        this.category = category;
        this.fuel = fuel;
        this.status = status;
        this.remarks = remarks;
    }
}