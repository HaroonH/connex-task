import { useState, useEffect } from "react";

function TimeDiffComponent (props) {

    const [stopWatch, setStopWatch] = useState('00:00:00');

        useEffect(() => {
            const timer = setInterval(() => {
                let date1;

                if (props.serverTime === 0) {
                    date1 = new Date(Date.now());
                }
                else {
                    date1 = new Date(props.serverTime);
                }
                
                let date2 = new Date(Date.now());
                
                let diff = date2.getTime() - date1.getTime();
                let msec = diff;

                let hh = '0' + Math.floor(msec / 1000 / 60 / 60);
                hh = hh.slice(-2);
                msec -= hh * 1000 * 60 * 60;
                let mm = '0' + Math.floor(msec / 1000 / 60);
                mm = mm.slice(-2);
                msec -= mm * 1000 * 60;
                let ss = '0' + Math.floor(msec / 1000);
                ss = ss.slice(-2);
                msec -= ss * 1000;

                let time = hh + ':' + mm + ':' + ss ;
                setStopWatch(time);

            }, 1000);

            return () => clearInterval(timer);
        }, [stopWatch, props.serverTime]);

    return ( 
            <p> Time Difference: {stopWatch} </p>
        
    );

}

export default TimeDiffComponent;
