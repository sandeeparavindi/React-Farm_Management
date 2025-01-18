export class Equipment {
    equipment_id: string;
    equipment_name: string;
    equipment_type: string;
    status: string;
    field: string;
    staff: string;

    constructor(
        equipment_id: string,
        equipment_name: string,
        equipment_type: string,
        status: string,
        field: string,
        staff: string,
    ) {
        this.equipment_id = equipment_id;
        this.equipment_name = equipment_name;
        this.equipment_type = equipment_type;
        this.status = status;
        this.field = field;
        this.staff = staff;
    }
}