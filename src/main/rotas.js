import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Login from '../view/login'
import CadastroUsuario from '../view/cadastroUsuario'
function Rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login}/>        
                <Route exact path="/cadastro-usuario" component={CadastroUsuario}/>        
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas