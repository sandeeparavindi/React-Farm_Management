import {HeaderComponent} from "../components/sidebar/HeaderComponent.tsx";
import {StaffCardComponent} from "../components/staff/StaffCardComponent.tsx";

export const DashboardPage = () => {

    return (
        <>
            <HeaderComponent section="Dashboard"/>
            <div>
                <h1 className="text-2xl font-bold text-blue-700">Staff Members</h1>
                <StaffCardComponent/>
            </div>
        </>
    );
};