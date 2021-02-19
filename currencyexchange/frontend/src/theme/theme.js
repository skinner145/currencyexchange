import { createMuiTheme } from '@material-ui/core'
import Colors from './colors'
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: Colors.primary,
      contrastText: Colors.primaryText
    },
    secondary: {
      main: Colors.secondary
    },
    typography: {
      fontFamily: "Comic Sans MS"
    },
    card: {
      borderRadius: 20
    },
    textField: {
      color: 'white'
    }
  },
  overrides: {
    MuiButton: {
      label: {
          color: 'white'
      }
    }
  }
})


// #802BB1
// #2D283E
// #564F6F
// #4C495D
// #D1D7E0


//
// #61892F
// #86C232
// #222629
// #474B4F
// #6B6E70
