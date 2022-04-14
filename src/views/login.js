import React from "react";
import Card from "../components/cards";
import FormGroup from "../components/form-group";


class Login extends React.Component {




    render() {
        return (
            <div calssNmae="container">
                <div className="row">
                    <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
                        <div className="bs-docs-section">
                            <Card title="Login">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="bs-component">
                                            <fieldset>
                                                <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                                                    <input type="email"
                                                        className="form-control"
                                                        id="exampleInputEmail1"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Digite o Email" />
                                                </FormGroup>

                                                <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                                                    <input type="senha"
                                                        className="form-control"
                                                        id="exampleInputPassword1"
                                                        placeholder="Password" />
                                                </FormGroup>

                                                <button onclick="window.location.href='home.html'" type="button"
                                                    className="btn btn-success">Entrar</button>
                                                <button onclick="window.location.href='usuarios.html'" type="button"
                                                    className="btn btn-danger">Cadastrar</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Login