import { useEffect, useState } from "react";
import ForecastBar from "./ForecastBar";

const WeeklyForecast = () => {

    const [date, setDate] = useState([]);
    const [minTemp, setMinTemp] = useState([]);
    const [maxTemp, setMaxTemp] = useState([]);
    const [condition, setCondition] = useState([]);

    const [forecasts, setForecasts] = useState([]);

    useEffect( () => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=4a24417b627b4e3d9ca232624231301&q=auto:ip&days=3`)
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch data');
                }
                return res.json();
            })
            .then(data => {
                setForecasts(data.forecast.forecastday);
               
            })
            .catch(err => {
                console.log(err.message);
            })
    }, []);

    

    return ( 
        <div>
            <ForecastBar date={forecasts[0].date} maxTemp={forecasts[0].day.maxtemp_f} minTemp={forecasts[0].day.mintemp_f} condition={forecasts[0].day.condition.text} />
            <ForecastBar date={forecasts[1].date} maxTemp={forecasts[1].day.maxtemp_f} minTemp={forecasts[1].day.mintemp_f} condition={forecasts[1].day.condition.text} />
            <ForecastBar date={forecasts[2].date} maxTemp={forecasts[2].day.maxtemp_f} minTemp={forecasts[2].day.mintemp_f} condition={forecasts[2].day.condition.text} />
        </div>
     );
}
 
export default WeeklyForecast;