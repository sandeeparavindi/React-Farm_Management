import {HeaderComponent} from "../components/sidebar/HeaderComponent.tsx";
import {StaffFormComponent} from "../components/staff/StaffFormComponent.tsx";

export const StaffPage = () => {
    return (
        <>
            <div className="mx-5">
                <HeaderComponent section="Staff Management"/>
                <StaffFormComponent/>
            </div>
        </>
    );
};