import './pomodoro.css';
import Timer from "./Timer";
import Settings from "./Settings";
import { useState } from "react";
import SettingsContext from "./SettingsContext";
import Wrapper from 'components/Wrapper/Wrapper';

function Pomodoro() {

    const [showSettings, setShowSettings] = useState(false);
    const [workMinutes, setWorkMinutes] = useState(45);
    const [breakMinutes, setBreakMinutes] = useState(15);

    return (
        <Wrapper title='Pomodoro Timer' content={
            <main>
                <SettingsContext.Provider value={{
                    showSettings,
                    setShowSettings,
                    workMinutes,
                    breakMinutes,
                    setWorkMinutes,
                    setBreakMinutes,
                }}>
                    {showSettings ? <Settings /> : <Timer />}
                </SettingsContext.Provider>
            </main>
        }>

        </Wrapper>

    );
}

export default Pomodoro;
