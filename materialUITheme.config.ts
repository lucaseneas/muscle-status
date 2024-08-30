import { blue, lightGreen, lime } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#00C2CB',
      },
      secondary: {
        main: '#001F2E',
      },
    },
  // Theme customization goes here as usual, including tonalOffset and/or
  // contrastThreshold as the augmentColor() function relies on these
});



export default theme;