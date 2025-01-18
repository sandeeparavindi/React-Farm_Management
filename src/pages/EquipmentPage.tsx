import {HeaderComponent} from "../components/sidebar/HeaderComponent.tsx";
import {EquipmentFormComponent} from "../components/equipment/EquipmentFormComponent.tsx";

export const EquipmentPage = () => {
    return (
        <>
            <div className="mx-5">
                <HeaderComponent section="Equipment Management"/>
                <EquipmentFormComponent />
            </div>
        </>
    );
}