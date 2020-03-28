import React, {useState} from 'react';
import RootComponent from './Components/RootComponent';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

const themeObject = {
  palette: {
    primary: {main: '#053f5b'},
    secondary: {main: '#5e3c6f'},
    type: 'dark'
  },
  themeName: 'Blue Lagoon 2020',
  typography: {
    fontFamily: 'Bitter',
    fontColor: 'white'
  }
}

const useDarkMode = () => {
  const [theme, setTheme] = useState(themeObject)
  const { palette: {type} } = theme;
  const toggleDarkMode =() => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === 'light' ? 'dark' : 'light'
      }
    }
    setTheme(updatedTheme)
  }
  return[theme, toggleDarkMode]
}

function App() {
  const [theme, toggleDarkMode] = useDarkMode()
  const themeConfig = createMuiTheme( theme )
  //console.log( themeConfig )
  return (
        <MuiThemeProvider theme={ themeConfig } >
          <RootComponent DarkMode = { toggleDarkMode }/>
        </MuiThemeProvider>
  );
}
export default App;
