import React, { useState } from 'react';

function TimeTicker(props) {
    const [count, setCount] = useState(0);
    const [intervalId, setIntervalId] = useState(0);
    const [countAtStop, setCountAtStop] = useState(0);

    const handleStart = () => {
        const newIntervalId = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);
        setIntervalId(newIntervalId);
    };
    const handleStop = () => {
        console.log('stop is clicked');
        if (intervalId) {
            clearInterval(intervalId);
            console.log('intervalid', intervalId);
            console.log('count', count);
            setCountAtStop(count);
            setCount(0);
            setIntervalId(0);
            return;
        }
    };

    return (
        <div>
            <h1>Count {count} </h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>

            <h2>count at stop: {countAtStop}</h2>
        </div>
    );
}

export default TimeTicker;
