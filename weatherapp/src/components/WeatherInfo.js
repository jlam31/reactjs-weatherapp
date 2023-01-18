import Container from '@mui/material/Container';
import CurrentWeather from './CurrentWeather';
import Box from '@mui/material/Box';
import WeeklyForecast from './WeeklyForecast';


const WeatherInfo = () => {

    

    return (  
        <div style={{ width: '100%' }}>
            <CurrentWeather />
            <WeeklyForecast />
        </div>
    );
}
 
export default WeatherInfo;