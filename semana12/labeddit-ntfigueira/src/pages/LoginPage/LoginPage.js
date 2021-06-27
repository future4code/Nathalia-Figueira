import React from 'react'
import { 
    ScreenContainer,
    LogoImage,
    SignUpbuttonContainer,
 } from './styled'
import logo from "../../assets/logo.png"
import LoginForm from './LoginForm'
import { Button } from '@material-ui/core'
import { goToSignUp } from '../../routes/coordinator'
import { useHistory } from 'react-router'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'



const LoginPage = ({setLoginLogoutButtonText}) =>{
    useUnprotectedPage()
    
    const history= useHistory() 
    
    return(
        <ScreenContainer>
            <LogoImage src={logo}/>
            <LoginForm
                 setLoginLogoutButtonText={setLoginLogoutButtonText}
            />            
            <SignUpbuttonContainer>
            <Button
                onClick={()=> goToSignUp(history)}
                type={"submit"}
                color= {'secondary'}
                margin= {'normal'}
                 >
                  <b>Ainda não possui uma conta? Cadastre-se!</b>  
                </Button>
            </SignUpbuttonContainer>
        </ScreenContainer>
    )
}
export default LoginPage 