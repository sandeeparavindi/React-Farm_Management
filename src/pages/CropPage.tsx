import {HeaderComponent} from "../components/sidebar/HeaderComponent.tsx";
import {CropFormComponent} from "../components/crop/CropFormComponent.tsx";

export const CropPage = () => {
    return (
        <>
            <div className="mx-5">
                <HeaderComponent section="Crop Management"/>
                <CropFormComponent/>
            </div>
        </>
    );
}