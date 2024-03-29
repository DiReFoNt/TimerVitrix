import React, { useState } from "react";
import BtnUserTimer from "./UI/BtnUserTimer.js";

const Timer = () => {
    const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState("");

    let updateMs = time.ms,
        updateS = time.s,
        updateM = time.m,
        updateH = time.h;

    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 10));
    };

    const stop = () => {
        clearInterval(interv);
        setStatus(2);
        console.log(time);
    };

    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ ms: 0, s: 0, m: 0, h: 0 });
    };

    const resume = () => {
        start();
    };

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

    const saveInput = (event) => {
        if (event.target.value !== 0) {
            setInputValue(event.target.value);
        }
    };

    return (
        <div
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-64 h-40"
        >
            {isFocused ? (
                <div
                    className={`border-solid border-black border-[4px] w-64 h-40 mt-3 flex flex-col justify-center items-center rounded-full`}
                >
                    <input
                        type="text"
                        className="text-center border-b-2 border-black border-grey outline-none"
                        placeholder="Name"
                        onInput={(e) => {
                            saveInput(e);
                        }}
                    ></input>

                    <div className="mb-2 mt-7">
                        <span>{time.h >= 10 ? time.h : "0" + time.h}</span>
                        &nbsp;:&nbsp;
                        <span>{time.m >= 10 ? time.m : "0" + time.m}</span>
                        &nbsp;:&nbsp;
                        <span>{time.s >= 10 ? time.s : "0" + time.s}</span>.
                        <span className="text-xs">
                            {time.ms >= 10 ? time.ms : "00" + time.ms}
                        </span>
                    </div>
                    <BtnUserTimer
                        status={status}
                        resume={resume}
                        reset={reset}
                        stop={stop}
                        start={start}
                    />
                </div>
            ) : (
                <div
                    className={`border-solid border-gray-700 border-[1px] w-64 h-40 mt-3 flex flex-col justify-center items-center rounded-full`}
                >
                    <input
                        type="text"
                        className="text-center border-b-[1px] border-black outline-none"
                        placeholder="Name"
                        onInput={(e) => {
                            saveInput(e);
                        }}
                    ></input>

                    <div className="mb-2 mt-7">
                        <span>{time.h >= 10 ? time.h : "0" + time.h}</span>
                        &nbsp;:&nbsp;
                        <span>{time.m >= 10 ? time.m : "0" + time.m}</span>
                        &nbsp;:&nbsp;
                        <span>{time.s >= 10 ? time.s : "0" + time.s}</span>
                    </div>
                    <BtnUserTimer
                        status={status}
                        resume={resume}
                        reset={reset}
                        stop={stop}
                        start={start}
                    />
                </div>
            )}
        </div>
    );
};

export default Timer;
