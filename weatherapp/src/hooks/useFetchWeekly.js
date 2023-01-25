import { useState, useEffect } from 'react';

const useFetchWeekly = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch data');
                }
                return res.json();
            })
            .then(data => {
                setData(data.forecast.forecastday);
                setLoading(false);
               
            })
            .catch(err => {
                console.log(err.message);
            })
    }, []);


    return {data, loading, error};
}
 
export default useFetchWeekly;