import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Login from '../view/login'
import CadastroUsuario from '../view/cadastroUsuario'
import Home from '../view/home'
import HomeAdmin from '../admin/home'
import GerenciadorImagem from '../view/gerenciadorImagem'
function Rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home/admin" component={HomeAdmin}/>
                <Route exact path="/home" component={Home} />
                <Route exact path="/gerenciador-imagem" component={GerenciadorImagem} />
                {/*<Route exact path="/login" component={Login}/>
                <Route exact path="/cadastro-usuario" component={CadastroUsuario}/>*/}
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas