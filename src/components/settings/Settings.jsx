import { UserSettings } from "../user/UserSettings";
import { useUserSettings } from "../../shared/hooks";
import { LoadingSpinner } from "../LoadingSpinner";

export const Settings = () => {
    const {userSettings, isFetching, saveSettings} = useUserSettings()
    if(isFetching){
        return <LoadingSpinner/>
    }

    return(
        <div className="settings-container">
            <span>Settings</span>
            <h1>CONFIGURACIONES</h1>
            <UserSettings settings={userSettings} saveSettings={saveSettings}/>
        </div>
    )
}