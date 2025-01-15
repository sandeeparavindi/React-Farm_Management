export class Field {
    code: string;
    name: string;
    location : string;
    size : number;

    constructor(code: string, name: string, location: string, size: number) {
        this.code = code;
        this.name = name;
        this.location = location;
        this.size = size;
    }
}