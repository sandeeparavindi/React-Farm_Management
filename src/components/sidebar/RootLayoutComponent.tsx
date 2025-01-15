import {Outlet} from "react-router";
import {NavbarComponent} from "./NavbarComponent.tsx";

export const RootLayoutComponent = () => {
    return (
        <>
            <NavbarComponent></NavbarComponent>
            <Outlet></Outlet>
        </>
    );
};