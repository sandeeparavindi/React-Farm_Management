export class Monitoring_log{
    log_code: string;
    log_date: string;
    observation: string;
    field: string;
    crop: string;
    staff: string;
    log_image: string;

    constructor(
        log_code: string,
        log_date: string,
        observation: string,
        field: string,
        crop: string,
        staff: string,
        log_image: string,
    ) {
        this.log_code = log_code;
        this.log_date = log_date;
        this.observation = observation;
        this.field = field;
        this.crop = crop;
        this.staff = staff;
        this.log_image = log_image;
    }
}