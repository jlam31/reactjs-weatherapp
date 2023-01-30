import useFetchWeekly from "../hooks/useFetchWeekly";
import ForecastBar from "./ForecastBar";

const WeeklyForecast = () => {


     const { data: forecasts, loading, error} = useFetchWeekly(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=auto:ip&days=3`);

    return ( 
        <div>
            { !loading && <ForecastBar date={forecasts[0].date} maxTemp={Math.round(forecasts[0].day.maxtemp_f)} minTemp={Math.round(forecasts[0].day.mintemp_f)} condition={forecasts[0].day.condition.text} icon={forecasts[0].day.condition.icon} /> }
            { !loading && <ForecastBar date={forecasts[1].date} maxTemp={Math.round(forecasts[1].day.maxtemp_f)} minTemp={Math.round(forecasts[1].day.mintemp_f)} condition={forecasts[1].day.condition.text} icon={forecasts[1].day.condition.icon}/> }
            { !loading && <ForecastBar date={forecasts[2].date} maxTemp={Math.round(forecasts[2].day.maxtemp_f)} minTemp={Math.round(forecasts[2].day.mintemp_f)} condition={forecasts[2].day.condition.text} icon={forecasts[2].day.condition.icon}/> }
        </div>
     );
}
 
export default WeeklyForecast;