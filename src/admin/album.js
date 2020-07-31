import React from 'react'
import Navbar from '../components/navbar'
import FomrGroup from '../components/form-group'
import api from '../serverConnection/api'
import Modal from '../components/modal'
var imagemTemporaria;
class Album extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imagens: [],
            titulo: '',
            tituloTemporario: '',
            uploadImagem: null
        }
    }

    componentDidMount() {
        document.title = "Album - " + this.props.location.state.dadosAlbum.titulo
        api.get('/admin/post/img/' + this.props.location.state.dadosAlbum._id)
            .then(res => {
                console.log(res.data)
                this.setState({ imagens: res.data })
            })
            .catch(error => {
                console.log(error)
            })
    }

    onChangeHandler = event => {
        this.setState({
            uploadImagem: event.target.files[0],
            loaded: 0
        })
    }

    excluirImagem = () => {

        api.delete('admin/post/img/' + imagemTemporaria._id)
            .then(res => {
                this.componentDidMount()
            })
            .catch(error => {
                console.log(error)
            })
    }

    pegarDadosImagem = imagemData => {
        imagemTemporaria = imagemData;
        this.setState({tituloTemporario: imagemData.titulo});
    }

    adicionarImagem = () => {

        if (this.state.uploadImagem !== null && this.state.titulo !== '') {
            const formData = new FormData();
            formData.append(
                'file',
                this.state.uploadImagem,
            )
            //Upload Imagem
            api.post('/admin/upload/img', formData)
                .then(res => {
                    //console.log(res)
                    //Salvar dados da Imagem
                    api.post('/admin/post/img', {
                        titulo: this.state.titulo,
                        key: res.data.fileName,
                        size: res.data.size,
                        url: res.data.url,
                        idAlbum: this.props.match.params.id
                    })
                        .then(res => {
                            console.log(res)
                            this.setState({ imagens: [...this.state.imagens, res.data] })
                            //Atualiza a ultima imagem para a capa do album
                            api.put('/admin/album/' + this.props.match.params.id, {
                                urlUltimaImagem: res.data.url
                            })
                                .then(res => {
                                    // console.log(res)
                                })
                                .catch(error => {
                                    console.log(error);
                                })
                        })
                        .catch(error => {
                            console.log(error)
                        })


                })
                .catch(error => {
                    console.log(error)
                })
        } else {
            alert("Titulo e/ou imagem estão vazio")
        }

    }

    render() {
        return (
            <div>
                <Navbar brand={"Album - " + this.props.location.state.dadosAlbum.titulo} item={<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ModalCentralizadoAdicionarImagem">Adicionar Imagem</button>} />
                {/*Modal para adicionar imagem*/}
                <Modal id="AdicionarImagem">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="TituloModalCentralizado">Adicionar Imagem</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <input type="file" name="file" onChange={this.onChangeHandler} />
                                <FomrGroup label="Titulo" htmlfor="tituloDaImagem  ">
                                    <input type="text" className="form-control" placeholder="Digite o titulo da imagem" style={{ marginTop: "10px" }} value={this.state.titulo} onChange={e => { this.setState({ titulo: e.target.value }) }} />
                                </FomrGroup>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Fechar</button>
                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.adicionarImagem}>Salvar</button>
                            </div>
                        </div>
                </Modal>

                <div className="container">

                    <div className="card-columns" style={{ marginTop: "10px" }}>
                        {this.state.imagens.length === 0 ? <div className="text-left">Nenhum imagem foi adicionada!</div> :
                            this.state.imagens.map((imagem) => (
                                <div id="card" className="card" key={imagem._id}>

                                    <i type="button" className="fas fa-trash fa-2x" data-toggle="modal"
                                        data-target="#ModalCentralizadoExcluirImagem" style={{ position: "absolute", right: 0 }} onClick={() => this.pegarDadosImagem(imagem)}/>
                                    {/* Modal para Excluir imagens */}
                                                    <Modal id="ExcluirImagem">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="TituloModalCentralizado">Excluir Imagem {this.state.tituloTemporario} ?</h5>
                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-danger" data-dismiss="modal">Fechar</button>
                                                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.excluirImagem}>Excluir</button>
                                                            </div>
                                                        </div>
                                                    </Modal>
                                    <img className="card-img-top" src={imagem.url} alt="Imagem de capa do card" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{imagem.titulo}</h5>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>

            </div>
        )
    }
}

export default Album