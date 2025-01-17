export class Staff {
    staff_id: string;
    first_name: string;
    last_name: string;
    Designation: string;
    Gender: string;
    joined_date: string;
    data_of_birth: string;
    address_line1: string;
    address_line2: string;
    address_line3: string;
    address_line4: string;
    address_line5: string;
    mobile: string;
    vehicle: string;

    constructor(
        staff_id: string,
        first_name: string,
        last_name: string,
        Designation: string,
        Gender: string,
        joined_date: string,
        data_of_birth: string,
        address_line1: string,
        address_line2: string,
        address_line3: string,
        address_line4: string,
        address_line5: string,
        mobile: string,
        vehicle: string,
    ) {
        this.staff_id = staff_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.Designation = Designation;
        this.Gender = Gender;
        this.joined_date = joined_date;
       this.data_of_birth = data_of_birth;
       this.address_line1 = address_line1;
       this.address_line2 = address_line2;
       this.address_line3 = address_line3;
       this.address_line4 = address_line4;
       this.address_line5 = address_line5;
       this.mobile = mobile;
       this.vehicle = vehicle;
    }
}