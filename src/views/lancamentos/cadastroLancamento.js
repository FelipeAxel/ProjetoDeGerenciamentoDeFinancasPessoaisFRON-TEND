import React from "react";

import Card from "../../components/cards";
import FormGroup from "../../components/form-group";
import LancamentoService from "../../app/service/lancamentoService";
import SelectMenu from "../../components/selectMenu";
import { withRouter } from 'react-router-dom';


class CadastroLancamentos extends React.Component {
<<<<<<< HEAD

    state = {
        id: null,
        descricao: '',
        valor: '',
        mes: '',
        ano: '',
        tipo: '',
        status: '',
    }

    constructor(){
        super();
        this.service = new LancamentoService();
    }

    submit = ()=>{
        console.log(this.state)
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({ [name] : value })
    }

    render(){
=======
    constructor() {
        super();
        this.service = new LancamentoService();
    }
    render() {
>>>>>>> parent of 9f4d829 (Correção do bug mes/String e DESPESA/RECEITA enum)
        const tipos = this.service.obterListaTipos();
        const meses = this.service.obterListaMeses();



        return (
<<<<<<< HEAD
            <Card title={ this.state.atualizando ? 'Atualização de Lançamento'  : 'Cadastro de Lançamento' }>
                <div className="row">
                    <div className="col-md-12">
                        <FormGroup id="inputDescricao" label="Descrição: *" >
                            <input id="inputDescricao" type="text" 
                                   className="form-control" 
                                   name="descricao"
                                   value={this.state.descricao}
                                   onChange={this.handleChange}  />
=======
            <Card title="Cadastro de Lançamento">

                <div className="row">
                    <div className="col-md-12">
                        <FormGroup id="inputDescricao" label="Descrição: *">
                            <input id="inputDescricao" type="text" className="form-control" />
>>>>>>> parent of 9f4d829 (Correção do bug mes/String e DESPESA/RECEITA enum)
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <FormGroup id="inputAno" label="Ano: *">
<<<<<<< HEAD
                            <input id="inputAno" 
                                   type="text"
                                   name="ano"
                                   value={this.state.ano}
                                   onChange={this.handleChange} 
                                   className="form-control" />
=======
                            <input id="inputAno" type="text" className="form-control" />
>>>>>>> parent of 9f4d829 (Correção do bug mes/String e DESPESA/RECEITA enum)
                        </FormGroup>
                    </div>
                    <div className="col-md-6">
                        <FormGroup id="inputMes" label="Mês: *">
<<<<<<< HEAD
                            <SelectMenu id="inputMes" 
                                        value={this.state.mes}
                                        onChange={this.handleChange}
                                        lista={meses} 
                                        name="mes"
                                        className="form-control" />
=======
                            <SelectMenu id="inputMes" lista={meses} className="form-control"></SelectMenu>
>>>>>>> parent of 9f4d829 (Correção do bug mes/String e DESPESA/RECEITA enum)
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
<<<<<<< HEAD
                         <FormGroup id="inputValor" label="Valor: *">
                            <input id="inputValor" 
                                   type="text"
                                   name="valor"
                                   value={this.state.valor}
                                   onChange={this.handleChange} 
                                   className="form-control" />
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                         <FormGroup id="inputTipo" label="Tipo: *">
                            <SelectMenu id="inputTipo" 
                                        lista={tipos} 
                                        name="tipo"
                                        value={this.state.tipo}
                                        onChange={this.handleChange}
                                        className="form-control" />
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                         <FormGroup id="inputStatus" label="Status: ">
                            <input type="text" 
                                   className="form-control" 
                                   name="status"
                                   value={this.state.status}
                                   disabled />
                        </FormGroup>
                    </div>

                   
                </div>
                <div className="row">
                     <div className="col-md-6" >
                        { this.state.atualizando ? 
                            (
                                <button onClick={this.atualizar} 
                                        className="btn btn-success">
                                        <i className="pi pi-refresh"></i> Atualizar
                                </button>
                            ) : (
                                <button onClick={this.submit} 
                                        className="btn btn-success">
                                        <i className="pi pi-save"></i> Salvar
                                </button>
                            )
                        }
                        <button onClick={e => this.props.history.push('/consulta-lancamentos')} 
                                className="btn btn-danger">
                                <i className="pi pi-times"></i>Cancelar
                        </button>
=======
                        <FormGroup id="inputValor" label="Valor: *">
                            <input id="inputValor" type="text" className="form-control" />
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup id="inputTipo" label="Tipo: *" >
                            <SelectMenu id="inputTipo" lista={tipos} className="form-control" ></SelectMenu>
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup id="inputStatus" label="Status: ">
                            <input id="inputStatus" type="text" className="form-control" disabled />
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <button className="btn btn-success">Salvar</button>
                    <button className="btn btn-danger">Cancelar</button>
>>>>>>> parent of 9f4d829 (Correção do bug mes/String e DESPESA/RECEITA enum)
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(CadastroLancamentos);