
import axios from 'axios'
import {BASE_URL} from '../constants/urls'
import { goToPostsList } from '../routes/coordinator' 

export const login = (body, clear, history, setLoginLogoutButtonText) => {
    axios.post (`${BASE_URL}login`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        clear()
        goToPostsList(history)
        setLoginLogoutButtonText('Logout')
    })
    .catch((err)=>{
        alert(err.response.data.message)
    })

}


export const signUp = (body, clear, history, setLoginLogoutButtonText) => {
    axios.post (`${BASE_URL}signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToPostsList(history)
        setLoginLogoutButtonText('Logout')
    })
    .catch((err)=>{
        alert(err.response.data.message)
    })
   

}