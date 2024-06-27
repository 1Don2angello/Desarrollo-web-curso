import React, { useState, useRef } from 'react';

 export const Stopwatch: React.FC = () => {
    const [time, setTime] = useState<number>(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const handleStart = () => {
        if (intervalRef.current !== null) return; // Prevents starting multiple intervals
        intervalRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000); // Updates time every second
    };

    const handleStop = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    const handleReset = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTime(0); // Resets time to zero
    };

    return (
        <div>
            <h1>{time} seconds</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Stopwatch;