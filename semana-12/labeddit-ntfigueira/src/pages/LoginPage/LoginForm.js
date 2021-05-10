import React from 'react'
import { InputContainer,} from './styled'
import { Button, TextField } from '@material-ui/core'
import FaceSharpIcon from '@material-ui/icons/FaceSharp';
import useForm from '../../hooks/useForm'
import {login} from '../../services/user'
import { useHistory } from 'react-router';



const LoginForm = ({setLoginLogoutButtonText}) => {
    const [form,onChange, clear]= useForm({email:'', password:''})
    const history =useHistory()
   
    const onSubmitForm = (e) => {
        e.preventDefault()
        login(form, clear, history,setLoginLogoutButtonText)
    }
   
    return(
            <InputContainer>
                <form onSubmit={onSubmitForm}>
                <TextField
                    name ={'email'}
                    value= {form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    fullWidth
                    margin= {'normal'}
                    required
                    type={'email'}
                    autoFocus
                    
                />
                 <TextField
                    name ={'password'}
                    value= {form.password}
                    onChange={onChange}
                    label={"Password"}
                    fullWidth
                    margin= {'normal'}
                    required
                    type={"password"}
                    autoFocus          
                />

                <Button
                type={"submit"}
                variant="contained"
                color={"primary"}
                fullWidth
                startIcon={<FaceSharpIcon/>}
                margin= {'normal'}
                 >
                    Fazer Login !
                </Button>
                </form>
            </InputContainer>
    )
}
export default LoginForm