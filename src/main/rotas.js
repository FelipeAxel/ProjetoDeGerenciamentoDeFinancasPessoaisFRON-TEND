import React from "react";
<<<<<<< HEAD
import { Route, Switch, HashRouter, Redirect} from 'react-router-dom';
=======
import { Route, Switch, HashRouter} from 'react-router-dom';
>>>>>>> parent of 9f4d829 (Correção do bug mes/String e DESPESA/RECEITA enum)
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
<<<<<<< HEAD
                <Route exact path="/login" component={Login} />
                <Route exact path="/cadastro-usuarios" component={CadastroUsuario} />

                <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/home" component={Home} />
                <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/consulta-lancamentos" component={consultaLancamentos} />
                <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/cadastro-lancamentos/:id?" component={cadastroLancamento} />
=======
                <Route exact path ="/home" component={Home}/>
                <Route exact path="/login" component={Login} />
                <Route exact path="/cadastro-usuarios" component={CadastroUsuario} />
                <Route exact path="/consulta-lancamentos" component={consultaLancamentos} />
                <Route exact path="/cadastro-lancamento" component={cadastroLancamento} />
>>>>>>> parent of 9f4d829 (Correção do bug mes/String e DESPESA/RECEITA enum)
            </Switch>
        </HashRouter>
    )
}
export default () => (
    <AuthConsumer>
        { (context) => (<Rotas isUsuarioAutenticado={context.isAutenticado} />) }
    </AuthConsumer>
)



