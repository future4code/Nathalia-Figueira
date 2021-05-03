import React, { useLayoutEffect } from 'react'
import { 
    ScreenContainer,
    LogoImage,
 } from './styled'
import logo from "../../assets/logo.png"
import SignUpForm from './SignUpForm'
import { useHistory } from 'react-router'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'


const SignUpPage = ({setLoginLogoutButtonText}) =>{
    const history= useHistory()
    useUnprotectedPage()
    
    return(
        <ScreenContainer>
            <LogoImage src={logo}/>
            <SignUpForm
                setLoginLogoutButtonText={setLoginLogoutButtonText}
            />            
        </ScreenContainer>
    )
}
export default SignUpPage