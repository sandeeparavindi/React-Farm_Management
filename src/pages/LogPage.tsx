import {HeaderComponent} from "../components/sidebar/HeaderComponent.tsx";
import {LogFormComponent} from "../components/monitoringLog/LogFormComponent.tsx";

export const LogPage = () => {
    return (
        <>
            <div className="mx-5">
                <HeaderComponent section="Monitoring Log Management"/>
                <LogFormComponent/>
            </div>
        </>
    );
}