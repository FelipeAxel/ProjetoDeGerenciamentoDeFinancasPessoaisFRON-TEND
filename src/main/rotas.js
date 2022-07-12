import React from "react";
<<<<<<< HEAD
import { Route, Switch, HashRouter} from 'react-router-dom';
=======
import { Route, Switch, HashRouter } from 'react-router-dom';
>>>>>>> parent of 69de65b (Erro na pasta node_modules)
import CadastroUsuario from "../views/cadastroUsuario";
import Home from '../views/home';
import Login from "../views/login";
import consultaLancamentos from "../views/lancamentos/consulta-lancamentos";
import cadastroLancamento from "../views/lancamentos/cadastroLancamento";



function Rotas() {
    return (
        <HashRouter>
            <Switch>
<<<<<<< HEAD
                <Route exact path ="/home" component={Home}/>
                <Route exact path="/login" component={Login} />
                <Route exact path="/cadastro-usuarios" component={CadastroUsuario} />
                <Route exact path="/consulta-lancamentos" component={consultaLancamentos} />
                <Route exact path="/cadastro-lancamento" component={cadastroLancamento} />
=======
                <Route exact path="/home" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/cadastro-usuarios" component={CadastroUsuario} />
                <Route exact path="/consulta-lancamentos" component={consultaLancamentos} />
                <Route exact path="/cadastro-lancamentos/:id?" component={cadastroLancamento} />
>>>>>>> parent of 69de65b (Erro na pasta node_modules)
            </Switch>
        </HashRouter>
    )
}
export default Rotas



