import React from 'react'
import Navbar from '../components/navbar'
import FomrGroup from '../components/form-group'
import img1 from '../img/img1.png'
import api from '../serverConnection/api'
class Album extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imagens: [],
            titulo: '', 
            uploadImagem: null
        }
    }

    componentDidMount() {
        document.title = "Album - " + this.props.location.state.dadosAlbum.titulo
        api.get('/admin/post/img/'+this.props.location.state.dadosAlbum._id)
        .then(res=>{
            this.setState({imagens: res.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }

    onChangeHandler = event => {
        this.setState({
            uploadImagem: event.target.files[0],
            loaded: 0
        })
    }

    adicionarImagem = () => {

        if (this.state.uploadImagem !== null) {
            const formData = new FormData();
            formData.append(
                'file',
                this.state.uploadImagem,
            )
            //Upload Imagem
            api.post('/admin/upload/img', formData)
                .then(res => {
                    
                    api.post('/admin/post/img', {
                        titulo: this.state.titulo,
                        key: res.data.fileName,
                        size: res.data.size,
                        url: res.data.url,
                        idAlbum: this.props.location.state.dadosAlbum._id
                    })
                        .then(res => {
                            console.log(res)
                            this.setState({imagens:[...this.state.imagens, res.data]})
                        })
                        .catch(error => {
                            console.log(error)
                        })


                })
                .catch(error => {
                    console.log(error)
                })
        }

    }

    render() {
        return (
            <div>
                <Navbar brand={"Album - " + this.props.location.state.dadosAlbum.titulo} item={<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ExemploModalCentralizado">Adicionar Imagem</button>} />
                <div className="modal fade" id="ExemploModalCentralizado" tabindex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
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
                    </div>
                </div>

                <div className="container">

                    <div className="card-columns" style={{ marginTop: "10px" }}>
                        {this.state.imagens.length === 0 ? <div className="text-left">Nenhum imagem foi adicionada!</div> :
                            this.state.imagens.map((imagem) => (
                                <div id="card" className="card" key={imagem._id}>
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