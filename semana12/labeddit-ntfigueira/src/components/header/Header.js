import React, { useState } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import {useStyles} from './styled'
import { goToLogin, goToPostsList } from '../../routes/coordinator'
import {useHistory} from 'react-router-dom'
import logo from "../../assets/logo.png"


const Header = ({loginLogoutButtonText, setLoginLogoutButtonText}) => {
  const classes = useStyles()
  const history = useHistory()
  const token = localStorage.getItem('token')

  
    const logout = () => {
      localStorage.removeItem('token')
    }
    const loginLogoutButtonTextAction = () => {
      if (token){
        logout()
        setLoginLogoutButtonText('Login')
        goToLogin(history)
    }else {
      goToLogin(history)
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className = {classes.toolbar}>
        <Box className= {classes.divLogo}>
          <Button 
            onClick={() => goToPostsList(history)}
            > 
              <img className={classes.logoButtonImg} src={logo}/>
          </Button>
        </Box>
        <Box className={classes.divSearchELogin}>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          <InputBase
              placeholder="Pesquisar…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Button  
            onClick={loginLogoutButtonTextAction} color="inherit">
              {loginLogoutButtonText}
              </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header