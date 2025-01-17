export class Crop {
    crop_code: string;
    common_name: string;
    scientific_name: string;
    category: string;
    season: string;
    crop_image: string;
    field: string;

    constructor(
        crop_code: string,
        common_name: string,
        scientific_name: string,
        category: string,
        season: string,
        crop_image: string,
        field: string
    ) {
        this.crop_code = crop_code;
        this.common_name = common_name;
        this.scientific_name = scientific_name;
        this.category = category;
        this.season = season;
        this.crop_image = crop_image;
        this.field = field;
    }
}
