import React from 'react'
import error from '../../assets/error.png'
import {ErrorImage, ErrorPageContainer, MessageError} from './Styled'

const ErrorPage = () =>{
    return(
        <ErrorPageContainer>
            <ErrorImage src={error}/>
            <MessageError>
                Desculpas :( <br/>
                Página Não Encontrada.<br/>  
                 - Erro 404 -
         </MessageError>
            
        </ErrorPageContainer>
    )

}

export default ErrorPage 