import CurrentWeather from './CurrentWeather';
import WeeklyForecast from './WeeklyForecast';


const WeatherInfo = () => {

    

    return (  
        <div style={{ width: '100%' }}>
            <CurrentWeather className="currWeather"/>
            <WeeklyForecast />
        </div>
    );
}
 
export default WeatherInfo;