import React from "react";
import { Route, Switch, HashRouter} from 'react-router-dom'
import CadastroUsuario from "../views/cadastroUsuario";
import Login from "../views/login";

function Rotas() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/cadastro-usuarios" component={CadastroUsuario} />
            </Switch>
        </HashRouter>
    )
}
export default Rotas



