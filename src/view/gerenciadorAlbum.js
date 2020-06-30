import React from 'react'
import Navbar from '../components/navbar'
import FomrGroup from '../components/form-group'
import img1 from '../img/img1.png'
import api from '../serverConnection/api'
class GerenciadorAlbum extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            albuns: [],
            titulo: ''
        }
    }

    componentDidMount(){
        api.get('/admin/album')
        .then( res =>{
            this.setState({albuns: res.data})
            console.log(res.data)
        })
        .catch( error =>{
            console.log(error);
        })
    }

    
    criarAlbum = () =>{
        api.post('/admin/album/create',{
            titulo: this.state.titulo
        })
        .then(res=>{
            console.log(res);
            this.setState({albuns: [...this.state.albuns, res.data]})
            this.setState({titulo:''})
        })
        .catch(error =>{
            console.log(error.error);
        })
    }

    abrirAlbum(album){
        window.open('/admin/album/'+album._id)
    }

    render() {
        return (
            <div>
                <Navbar brand="Gerenciador de Imagens" item={<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ExemploModalCentralizado">Criar Album</button>} />
                <div className="modal fade" id="ExemploModalCentralizado" tabindex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="TituloModalCentralizado">Criar Album</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <FomrGroup label="Titulo" htmlfor="tituloAlbum  ">
                                    <input type="text" className="form-control" placeholder="Digite o titulo do album" value={this.state.titulo} onChange={e=>this.setState({titulo:e.target.value})} />
                                </FomrGroup>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Fechar</button>
                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.criarAlbum}>Salvar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">

                    <div className="card-columns" style={{ marginTop: "10px" }}>
                        {this.state.albuns.length===0 ? <div className="text-left">Nenhum album foi criado!</div> :
                            this.state.albuns.map((album) => (
                                <div id="card" className="card" key={album._id} onClick={()=>this.abrirAlbum(album)}>
                                    <img className="card-img-top" src={album.ultimaImagem ? album.ultimaImagem  :  img1} alt="Imagem de capa do card" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{album.titulo}</h5>
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