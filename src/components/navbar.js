import React from "react";

import NavBarItem from "./navbaritem";

function NavBar() {
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <a href="https://bootswatch.com/" className="navbar-brand">Minhas Finanças</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <NavBarItem href="#/home" label="Home" />
                        <NavBarItem href="#/cadastro-usuarios" label="Usuários" />
<<<<<<< HEAD
                        <NavBarItem href="#/" label="Lancamentos" />
=======
                        <NavBarItem href="#/consulta-lancamentos" label="Lancamentos" />
>>>>>>> parent of 69de65b (Erro na pasta node_modules)
                        <NavBarItem href="#/Login" label="Login" />
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default NavBar