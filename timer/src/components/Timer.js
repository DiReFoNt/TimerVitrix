import React, { useState } from "react";
import { BtnTimer } from "./UI/BtnTimer.js";

const Timer = () => {
    const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);

    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 10));
    };

    const stop = () => {
        clearInterval(interv);
        setStatus(2);
    };

    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ ms: 0, s: 0, m: 0, h: 0 });
    };

    const resume = () => start();

    let updateMs = time.ms,
        updateS = time.s,
        updateM = time.m,
        updateH = time.h;

    const run = () => {
        if (updateM === 60) {
            updateH++;
            updateM = 0;
        }
        if (updateS === 60) {
            updateM++;
            updateS = 0;
        }
        if (updateMs === 100) {
            updateS++;
            updateMs = 0;
        }
        updateMs++;
        return setTime({ ms: updateMs, s: updateS, m: updateM, h: updateH });
    };

    return (
        <div className="border-solid border-2 w-64 h-32 mt-3 flex flex-col justify-center items-center rounded-full">
            <div className="mb-2">
                <span>{time.h >= 10 ? time.h : "0" + time.h}</span>&nbsp;:&nbsp;
                <span>{time.m >= 10 ? time.m : "0" + time.m}</span>&nbsp;:&nbsp;
                <span>{time.s >= 10 ? time.s : "0" + time.s}</span>.
                <span className="text-xs">
                    {time.ms >= 10 ? time.ms : "00" + time.ms}
                </span>
            </div>
            <BtnTimer
                status={status}
                resume={resume}
                reset={reset}
                stop={stop}
                start={start}
            />
        </div>
    );
};

export default Timer;
