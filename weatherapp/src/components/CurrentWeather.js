import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import testLogo from '../weather/64x64/day/113.png'


import { Container, flexbox } from '@mui/system';
import { useEffect, useState } from 'react';


const CurrentWeather = () => {

    const [location, setLocation] = useState('');
    const [currCondition, setCurrCondition] = useState('');
    const [currTemp, setCurrTemp] = useState('');

    useEffect( () => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=auto:ip`)
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

    return ( 
        <Box sx={{width:1}}>
            <Container sx={{ border:1}}>
                <h2>{location}</h2>
                <p>{currCondition}</p>

                <Box sx={{ textAlign: 'left', mt:4, display:'grid' }}>
                    <Box sx={{ gridRow:'1'}}>
                        <h2 style={{display:"flex", justifyContent:"center"}}>{currTemp}&#176;F</h2>
                       
                    </Box>
                    <Box sx={{ gridRow:'1', height:300, bgcolor:'success.main'}}>
                    <img src={testLogo} />
                    </Box>
                </Box>

            </Container>
            
        </Box>
        
     );
}
 
export default CurrentWeather;