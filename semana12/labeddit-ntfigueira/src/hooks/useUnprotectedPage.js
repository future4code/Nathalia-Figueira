
import { useLayoutEffect } from "react"
import { useHistory } from "react-router-dom"
import { goToPostsList } from "../routes/coordinator"


const useUnprotectedPage = () =>{
    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if (token){
            goToPostsList(history)
            }
    },[history]
    )
}

export default useUnprotectedPage