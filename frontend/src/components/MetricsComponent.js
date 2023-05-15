import { useState, useEffect, useCallback } from "react";

function MetricsComponent () {
    const [metricsNow, setMetricsNow] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const fetchMetrics = useCallback(async () => {
        setIsLoading(true);
        const response = await fetch('http://localhost:3001/metrics', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer mysecrettoken'
            }
        });
        const metricsData = await response.text();
        setMetricsNow(metricsData);
        setIsLoading(false);
    }, []);


    useEffect(() => {
        setInterval(fetchMetrics, 30000);
        fetchMetrics();
    }, []);


    return (
        
        <div className="metrics">
            <pre>Server Metrics: {!isLoading && metricsNow}</pre>
            {isLoading && <span className="loading">Loading...</span>}
        </div>
    );

}



export default MetricsComponent;
