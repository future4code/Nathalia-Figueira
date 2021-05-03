import React from 'react'
import { Switch, Route} from 'react-router-dom'
import AddPostPage from '../pages/AddPostPage/AddPostPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PostDetail from '../pages/PostDetailPage/PostDetailPage'
import PostsListPage from '../pages/PostsListPage/PostsListPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'


const Router = ({ loginLogoutButtonText, setLoginLogoutButtonText}) => {
    return(
            <Switch>
                <Route exact path="/login">
                    <LoginPage 
                         setLoginLogoutButtonText={setLoginLogoutButtonText}
                    />
                </Route>
                <Route  exact path="/cadastro">
                    <SignUpPage 
                        setLoginLogoutButtonText={setLoginLogoutButtonText}
                    />
                </Route>
                <Route exact path="/adicionar-post">
                    <AddPostPage />
                </Route>
                <Route exact path ="/detalhe/:id">
                    <PostDetail/>
                </Route>
                <Route exact path="/">
                    <PostsListPage />
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>

    )
}

export default Router