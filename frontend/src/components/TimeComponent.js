import { useState, useEffect, useCallback } from "react";
import TimeDiffComponent from "./TimeDiffComponent";

function TimeComponent () {
    const [timeNow, setTimeNow] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const fetchTime = useCallback(async () => {
        setIsLoading(true);
        const response = await fetch('http://localhost:3001/time', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer mysecrettoken'
            }
        });
        const timeData = await response.json();
        setTimeNow(timeData.epoch);
        setIsLoading(false);
    }, [timeNow]);


    useEffect(() => {
        setInterval(fetchTime, 30000);
        fetchTime();
    }, []);


    return (
        <div className="time">
            <p>Server Time: {!isLoading && timeNow}</p>
            <TimeDiffComponent serverTime={timeNow}/>
            {isLoading && <span>Loading...</span>}
        </div>
    );

}



export default TimeComponent;
