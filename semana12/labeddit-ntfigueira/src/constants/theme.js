import { createMuiTheme } from '@material-ui/core/styles';
import { primaryColor, secondaryColor, spotLightColor, neutralColor } from './colors';


const theme = createMuiTheme({
  palette: {
    primary: {
      
      main: primaryColor,
      // dark: will be calculated from palette.primary.main,
      contrastText: neutralColor,
    },
    secondary: {
      main: secondaryColor,
      // dark: will be calculated from palette.secondary.main,
      contrastText: spotLightColor,
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  
});

export default theme