import { useState, useEffect } from 'react';


const useFetchCurrent = (url) => {

    const [location, setLocation] = useState('');
    const [currCondition, setCurrCondition] = useState('');
    const [currTemp, setCurrTemp] = useState('');

    useEffect( () => {
        fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch data');
                }
                return res.json();
            })
            .then(data => {
                setLocation(data.location.name);
                setCurrCondition(data.current.condition.text);
                setCurrTemp(data.current.temp_f);
            })
            .catch(err => {
                console.log(err.message);
            })
    })

    return { location, currCondition, currTemp};
}
 
export default useFetchCurrent;