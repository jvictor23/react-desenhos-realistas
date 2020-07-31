import React from 'react'
import Navbar from '../components/navbar'
import img1 from '../img/img1.png'
import api from '../serverConnection/api'
import Modal from '../components/modal'
import FomrGroup from '../components/form-group'
var albumTemporario;
class GerenciadorAlbum extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            albuns: [],
            titulo: '',
            tituloTemporario:''
        }
    }

    componentDidMount() {
        api.get('/admin/album')
            .then(res => {
                this.setState({ albuns: res.data })
            })
            .catch(error => {
                console.log(error);
            })
    }

    excluirAlbum = () =>{
        api.delete('/admin/album/'+ albumTemporario._id)
        .then(res=>{
            console.log(res.data);
            this.componentDidMount()
        })
        .catch(error=>{
            console.log(error);
        })
    }


    criarAlbum = () => {
        api.post('/admin/album/create', {
            titulo: this.state.titulo
        })
            .then(res => {
                console.log(res);
                this.setState({ albuns: [...this.state.albuns, res.data] })
                this.setState({ titulo: '' })
            })
            .catch(error => {
                console.log(error.error);
            })
    }

    abrirAlbum(album) {
        this.props.history.push('/admin/album/' + album._id, { dadosAlbum: album })
    }

    pegarDadosAlbum = albumData =>{
        albumTemporario = albumData;
        this.setState({tituloTemporario: albumData.titulo});
    }

    render() {
        return (
            <div>
                <Navbar brand="Gerenciador de Albuns" item={<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ModalCentralizadoCriarAlbum">Criar Album</button>} />
                {/* Modal para criar album */}
                <Modal id="CriarAlbum">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="TituloModalCentralizado">Criar Album</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <FomrGroup label="Titulo" htmlfor="tituloAlbum  ">
                                <input type="text" className="form-control" placeholder="Digite o titulo do album" value={this.state.titulo} onChange={e => this.setState({ titulo: e.target.value })} />
                            </FomrGroup>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Fechar</button>
                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.criarAlbum}>Salvar</button>
                        </div>
                    </div>
                </Modal>
                <div className="container">

                    <div className="card-columns" style={{ marginTop: "10px" }}>
                        {this.state.albuns.length === 0 ? <div className="text-left">Nenhum album foi criado!</div> :
                            this.state.albuns.map((album) => (
                                <div id="card" className="card" key={album._id} >
                                    <i className=""></i>
                                    <i className="fas fa-trash fa-2x" style={{ position: "absolute", right: 0 }} data-toggle="modal" data-target="#ModalCentralizadoExcluirAlbum" onClick={()=>this.pegarDadosAlbum(album)} />

                                    {/* Modal para excluir Albun */}

                                    <Modal id="ExcluirAlbum">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="TituloModalCentralizado">Excluir Album {this.state.tituloTemporario} ?</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-danger" data-dismiss="modal">Fechar</button>
                                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.excluirAlbum}>Excluir</button>
                                            </div>
                                        </div>
                                    </Modal>

                                    <div onClick={() => this.abrirAlbum(album)}>
                                        <img className="card-img-top" src={album.urlUltimaImagem ? album.urlUltimaImagem : img1} style={{ height: "250px" }} alt="Imagem de capa do card" />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">{album.titulo}</h5>
                                        </div>
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

export default GerenciadorAlbum