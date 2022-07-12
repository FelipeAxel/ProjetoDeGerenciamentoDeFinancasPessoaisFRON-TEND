import React from "react";
import { Route, Switch, HashRouter, Redirect} from 'react-router-dom';
import CadastroUsuario from "../views/cadastroUsuario";
import Home from '../views/home';
import Login from "../views/login";
import consultaLancamentos from "../views/lancamentos/consulta-lancamentos";
import cadastroLancamento from "../views/lancamentos/cadastroLancamento";
import {AuthConsumer} from '../main/provedorAutenticacao'



function RotaAutenticada({ component: Component, isUsuarioAutenticado, ...props }) {
    return (
        <Route exact {...props} render={(componentProps) => {
            if (isUsuarioAutenticado) {
                return (
                    <Component {...componentProps} />
                )
            } else {
                return (
                    <Redirect to={{ pathname: '/login', state: { from: componentProps.location } }} />
                )
            }
        }} />
    )
}



function Rotas(props) {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/cadastro-usuarios" component={CadastroUsuario} />

                <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/home" component={Home} />
                <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/consulta-lancamentos" component={consultaLancamentos} />
                <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/cadastro-lancamentos/:id?" component={cadastroLancamento} />
            </Switch>
        </HashRouter>
    )
}
export default () => (
    <AuthConsumer>
        { (context) => (<Rotas isUsuarioAutenticado={context.isAutenticado} />) }
    </AuthConsumer>
)



