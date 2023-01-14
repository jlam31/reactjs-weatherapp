import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import testLogo from '../weather/64x64/day/113.png'


import { Container, flexbox } from '@mui/system';


const CurrentWeather = () => {
    return ( 
        <Box sx={{width:1}}>
            <Container sx={{ border:1}}>
                <h2>Portland, Oregon</h2>
                <p>Wednesday, 10:48 AM, Scattered Showers</p>

                <Box sx={{ textAlign: 'left', mt:4, display:'grid' }}>
                    <Box sx={{ gridRow:'1'}}>
                        <h2 style={{display:"flex", justifyContent:"center"}}>20&#176;F</h2>
                       
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