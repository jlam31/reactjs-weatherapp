import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';

const SearchBar = () => {
    return ( 
        <Container sx={{p: 3}}>
            <TextField fullWidth label="Enter city/zipcode" variant='outlined' />
        </Container>
     );
}
 
export default SearchBar;