import React from 'react'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import Login from '../view/login'
import CadastroUsuario from '../view/cadastroUsuario'
import Home from '../view/home'
import HomeAdmin from '../admin/home'
import GerenciadorAlbum from '../admin/gerenciadorAlbum'
import AlbumAdmin from '../admin/album'
import Album from '../view/album'
import {isAuthenticated} from './auth'

const PriveteRoute = ({component: Component, ... rest}) =>(
    <Route {... rest} render={props=>(
        isAuthenticated() ? (
            <Component {... props} />
        ) : (
            <Redirect to={{pathname: '/admin', state:{from: props.location }}} />
        )
    )}/>
)

const Rotas = () =>  (
        <BrowserRouter>
            <Switch>
                <PriveteRoute exact path="/admin/home" component={HomeAdmin}/>
                <Route exact path="/" component={Home} />
                <Route exact path="/admin/gerenciador-album" component={GerenciadorAlbum} />
                <Route exact path="/admin/album/:id" component={AlbumAdmin} />
                <Route exact path="/album/:id" component={Album} />
                <Route exact path="/admin" component={Login}/>
                <Route exact path="/cadastro-usuario" component={CadastroUsuario}/>
            </Switch>
        </BrowserRouter>
    );

export default Rotas