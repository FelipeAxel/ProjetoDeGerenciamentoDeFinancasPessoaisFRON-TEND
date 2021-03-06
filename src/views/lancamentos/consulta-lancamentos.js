import React from 'react'
import { withRouter } from 'react-router-dom'


import Card from '../../components/cards'
import FormGroup from '../../components/form-group'
import SelectMenu from '../../components/selectMenu'
import LancamentosTable from './lancamentosTable'
import LancamentoService from '../../app/service/lancamentoService'
import LocalStorageService from '../../app/service/localstoregeService'

import * as messages from '../../components/toastr'

import { Dialog } from 'primereact/dialog';
import {Button} from 'primereact/button';

class ConsultaLancamentos extends React.Component {


    state = {
        ano: '',
        mes: '',
        tipo: '',
        descricao: '',
        showConfirmDialog:false,
        lancamentoDeletar:{},
        lancamentos: []

    }
    constructor() {
        super();
        this.service = new LancamentoService();
    }
    buscar = () => {

        if (!this.state.ano) {
            messages.mensagemErro('O preenchimento do campo ano é obrigatório.')
            return false;
        }
        const usuarioLogado = LocalStorageService.obterItem('_usuario_logado');
        const lancamentoFiltro = {
            ano: this.state.ano,
            mes: this.state.mes,
            tipo: this.state.tipo,
            descricao: this.state.descricao,
            usuario: usuarioLogado.id
        }
        this.service
            .consultar(lancamentoFiltro)
            .then(resposta => {
                this.setState({ lancamentos: resposta.data })
            }).catch(error => {
                console.log(error)
            })
    }

    editar = (id) => {
        console.log('edit lancandment', id)
    }

    abrirConfirmação=(lancamento)=>{
        this.setState({showConfirmDialog:true, lancamentoDeletar:lancamento})
    }

    cancacelarDelecao= () =>{
        this.setState({showConfirmDialog:false, lancamentoDeletar:{}})
    }


    deletar = () => {
        this.service
            .deletar(this.state.lancamentoDeletar.id)
            .then(response => {
                const lancamentos = this.state.lancamentos;
                const index = lancamentos.indexOf(this.state.lancamentoDeletar)
                lancamentos.splice(index, 1);
                this.setState({lancamentos: lancamentos, showConfirmDialog:false})
                messages.mensagemSucesso('Lançamento deletado com sucesso')
            }).catch(error => {
<<<<<<< HEAD
                messages.mensagemErro('Ocorreu um erro ao deletar lançamento')
            })
    }
=======
                messages.mensagemErro('Ocorreu um erro ao tentar deletar o Lançamento')
            })
    }

    preparaFormularioCadastro = () => {
        this.props.history.push('/cadastro-lancamentos')
    }

    alterarStatus = (lancamento, status) => {
        this.service
            .alterarStatus(lancamento.id, status)
            .then(response => {
                const lancamentos = this.state.lancamentos;
                const index = lancamentos.indexOf(lancamento);
                if (index !== -1) {
                    lancamento['status'] = status;
                    lancamentos[index] = lancamento
                    this.setState({ lancamento });
                }
                messages.mensagemSucesso("Status atualizado com sucesso!")
            })
    }

    preparaFormularioCadastro =()=>{
        this.props.history.push('/cadastro-lancamentos')
    }


>>>>>>> parent of 69de65b (Erro na pasta node_modules)

    render() {
        const meses = this.service.obterListaMeses();
        const tipos = this.service.obterListaTipos();

        const confirmDialogFooter = (
            <div>
                <Button label="Confirmar" icon="pi pi-check" onClick={this.deletar} />
                <Button label="Cancelar" icon="pi pi-times" onClick={this.cancacelarDelecao} 
                className="p-button-secondary" />
            </div>
        );

        return (
            <Card title="Consulta Lançamento">
                <div className="row">
                    <div className="col-md-6">
                        <div className="bs-component">
                            <FormGroup htmlfor="inputAno" label="Ano: *">
                                <input type="text"
                                    className="form-control"
                                    id="inputAno"
                                    value={this.state.ano}
                                    onChange={e => { this.setState({ ano: e.target.value }) }}
                                    placeholder="Digite o Ano" />
                            </FormGroup>

                            <FormGroup htmlfor="inputMes"
                                label="Mês: ">
                                <SelectMenu id="inputMes"
                                    value={this.state.mes}
                                    onChange={e => { this.setState({ mes: e.target.value }) }}
                                    className="form-control"
                                    lista={meses} />
                            </FormGroup>

                            <FormGroup htmlfor="inputDescricao" label="Descrição: *">
                                <input type="text"
                                    className="form-control"
                                    id="inputDescricao"
                                    value={this.state.descricao}
                                    onChange={e => { this.setState({ descricao: e.target.value }) }}
                                    placeholder="Digite a Descrição" />
                            </FormGroup>

                            <FormGroup htmlfor="inputTipo"
                                label="Tipo Lançamento: *">
                                <SelectMenu id="inputTipo"
                                    value={this.state.tipo}
                                    onChange={e => { this.setState({ tipo: e.target.value }) }}
                                    className="form-control"
                                    lista={tipos} />
                            </FormGroup>

                            <button onClick={this.buscar} type="button" className="btn btn-success">Buscar</button>
                            <button type="button" className="btn btn-danger">Cadastrar</button>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <LancamentosTable lancamentos={this.state.lancamentos}
                                deletar={this.abrirConfirmação}
                                editar={this.editar} />
                        </div>
                    </div>
                </div>

                <div>
                    <Dialog header="Confirmação" 
                        visible={this.state.showConfirmDialog} 
                        style={{ width: '50vw' }} 
                        footer={confirmDialogFooter}
                        modal={true} 
                        onHide={() => this.setState({showConfirmDialog:false})}>
                            Confirme a exclusão desse lançamento
                    </Dialog>
                </div>
            </Card>
        )
    }
}

export default withRouter(ConsultaLancamentos);