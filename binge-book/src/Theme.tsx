import { experimental_extendTheme as extendTheme} from '@mui/material/styles';


const CustomTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#FF4F4F", // Red
        },
        secondary: {
          main: '#FFFFFF', // White
        },
      },
    },
  }
});

export default CustomTheme