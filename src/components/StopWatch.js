import React, { useState, useEffect } from 'react';

export default function StopWatch() {
    const [counter, setCounter] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if(isRunning){
            const interval = setInterval(() => {
                setCounter(counter => Math.round((counter + 0.01)*100)/100);
            },10);
            return () => clearInterval(interval);
        }
    }, [isRunning]);

    function start() {
        setIsRunning(true);
    }  
    function stop() {
        setIsRunning(false);
    }   
    function reset() {
        setIsRunning(false);
        setCounter(0);
    }

    return(
        <>
        <div className="container">
            <h1>{counter}秒</h1>
            <button onClick ={ () => setCounter(counter + 1)}>+</button>
            <div className="stopwatch-buttons">
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
        </>
    )
};
