import { Outlet } from "react-router";
import { SidebarComponent } from "./SidebarComponent.tsx";

export const RootLayoutComponent = () => {
    return (
        <div className="flex">
            <SidebarComponent />
            <div className="flex-grow">
                <Outlet />
            </div>
        </div>
    );
};