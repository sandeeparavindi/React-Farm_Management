import {HeaderComponent} from "../components/sidebar/HeaderComponent.tsx";
import {VehicleFormComponent} from "../components/VehicleFormComponent.tsx";

export const VehiclePage = () => {
    return (
        <>
            <div className="mx-5">
                <HeaderComponent section="Vehicle Section"/>
                <VehicleFormComponent/>
            </div>
        </>
    );
}