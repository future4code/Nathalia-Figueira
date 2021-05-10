import React, {useState} from 'react'
import {ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom';
import theme from './constants/theme';
import Router from './routes/Router'
import Header from './components/header/Header';

const App = () =>{
  const token = localStorage.getItem('token')
  const [loginLogoutButtonText, setLoginLogoutButtonText] = useState(token ? 'Logout' : 'Login')

  
  return (
    <ThemeProvider theme ={theme}> 
      <BrowserRouter>
          <Header
          loginLogoutButtonText={loginLogoutButtonText}
          setLoginLogoutButtonText={setLoginLogoutButtonText}
          />
          <Router
           setLoginLogoutButtonText={setLoginLogoutButtonText}/>
      </BrowserRouter>
    </ThemeProvider>
   );
}

export default App;
