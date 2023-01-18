import { Container } from "@mui/system";

const ForecastBar = ({date, maxTemp, minTemp, condition}) => {
    return (  
        <div className="forecast-bar">
            <h3>{date}</h3>
            <div className="forecast-bar-content">
                <p>{`High: ${maxTemp}`} &#176;F</p>
                <p>{`Low: ${minTemp} `} &#176;F</p>
                <p>{condition}</p>
            </div>
        </div>
    );
}
 
export default ForecastBar;