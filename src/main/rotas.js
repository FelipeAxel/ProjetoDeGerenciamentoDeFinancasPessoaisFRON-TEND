import React from "react";
import { Route, Switch, HashRouter} from 'react-router-dom';
import CadastroUsuario from "../views/cadastroUsuario";
import Home from '../views/home';
import Login from "../views/login";
import consultaLancamentos from "../views/lancamentos/consulta-lancamentos";




function Rotas() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path ="/home" component={Home}/>
                <Route exact path="/login" component={Login} />
                <Route exact path="/cadastro-usuarios" component={CadastroUsuario} />
                <Route exact path="/consulta-lancamentos" component={consultaLancamentos} />
            </Switch>
        </HashRouter>
    )
}
export default Rotas



