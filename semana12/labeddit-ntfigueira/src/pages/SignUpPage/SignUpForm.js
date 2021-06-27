import React from 'react'
import { InputContainer} from './styled'
import { Button, TextField } from '@material-ui/core'
import useForm from '../../hooks/useForm'
import {signUp} from '../../services/user'
import { useHistory } from 'react-router-dom';




const SignUpForm = ({setLoginLogoutButtonText}) => {
    const history =useHistory()
    const [form,onChange, clear]= useForm({username:'', email:'', password:'',})
    

    const onSubmitForm = (e) => {
        e.preventDefault()
        signUp(form, clear, history, setLoginLogoutButtonText)
        
    }
    return(  
            <InputContainer>
                <form onSubmit={onSubmitForm}>
                <TextField
                    name ={'username'}
                    value= {form.username}
                    onChange={onChange}
                    label={"Nome do Usuário"}
                    fullWidth
                    margin= {'normal'}
                    required
                    autoFocus
                    
                />
                <TextField
                    name ={'email'}
                    value= {form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    fullWidth
                    margin= {'normal'}
                    required
                    type={'email'}
                    
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
                />

                <Button
                type={"submit"}
                variant="contained"
                color={"primary"}
                fullWidth
                margin= {'normal'}
                 >
                    Cadastrar:)
                </Button> 
            </form>
            </InputContainer> 
       
    )
}
export default SignUpForm