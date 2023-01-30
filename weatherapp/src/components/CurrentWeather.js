import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


import { Container, flexbox } from '@mui/system';
import { useEffect, useState } from 'react';
import useFetchCurrent from '../hooks/useFetchCurrent';


const CurrentWeather = () => {

    const { location, currCondition, currTemp, icon} = useFetchCurrent(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=auto:ip`);

    return ( 
        <Box sx={{width:1}}>
            <Container sx={{ border:1}}>
                <h2>{location}</h2>
                <p>{currCondition}</p>

                <Box sx={{ textAlign: 'left', mt:4, display:'grid' }}>
                    <Box sx={{ gridRow:'1'}}>
                        <h2 >{currTemp}&#176;F</h2>
                        <img src={icon} />
                    </Box>
                    <Box sx={{ gridRow:'1', height:100, /* bgcolor:'success.main'*/ }}>
                    
                    </Box>
                </Box>

            </Container>
            
        </Box>
        
     );
}
 
export default CurrentWeather;